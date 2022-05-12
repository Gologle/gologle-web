import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useQuery as useQueryRQ, QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from 'react-query'

type ErrorResponse = {
  detail: string | string[]
}

const isAxiosError = (e: AxiosError<ErrorResponse> | any): e is AxiosError<ErrorResponse> =>
  'isAxiosError' in e

const retryFn = (count: number, e: unknown) => isAxiosError(e) && e.response.status != 404 && count < 3

export const useQuery = <T>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: UseQueryOptions<T>
): UseQueryResult<T> => {
  const router = useRouter()

  return useQueryRQ(queryKey, queryFn, {
    retry: retryFn,
    ...options,
    onError: e => {
      if (isAxiosError(e)) {
        const data = e.response.data
        if (!data) {
          return toast.error('Could not get response from server')
        }
        if (e.response.status === 404) {
          router.push('/404')
          return
        }

        return toast.error(
          'API: ' +
            (typeof e.response.data?.detail === 'string'
              ? e.response.data?.detail
              : e.response.data?.detail.join(', '))
        )
      }
      return options?.onError?.(e)
    },
  })
}
