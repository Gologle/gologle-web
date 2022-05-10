import { SearchOutput } from '~api/query.types'
import { useQuery } from '../../api/utils'
import queryApi from '~api/query'

export type DatasetType = 'cranfield' | 'newgroups' | 'reuters'

type useSearchProps = {
  q: string
  limit?: number
  offset?: number
  dataset?: DatasetType
}

const useSearch = ({ q }: useSearchProps) => {
  return useQuery<SearchOutput>('search-api', () => queryApi.search({ data: { q } }), {
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}

export default useSearch
