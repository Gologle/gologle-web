import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useQuery as useQueryRQ, QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from 'react-query'

const isAxiosError = (e: AxiosError<Error> | any): e is AxiosError<Error> => 'isAxiosError' in e

export const useQuery = <T>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: UseQueryOptions<T>
): UseQueryResult<T> => {
  return useQueryRQ(queryKey, queryFn, {
    ...options,
    onError: e => {
      if (isAxiosError(e)) {
        if (!e.response.data) {
          return toast.error('Could not get response from server')
        }

        return toast.error(
          typeof e.response.data?.message === 'string'
            ? e.response.data?.message
            : (e as any).response.data.message.join(', ')
        )
      }
      return options?.onError?.(e)
    },
  })
}
