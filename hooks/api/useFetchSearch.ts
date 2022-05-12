import { SearchOutput } from '~api/query.types'
import { useQuery } from '../../api/utils'
import queryApi from '~api/query'

export type DatasetType = 'cranfield' | 'newsgroups' | 'reuters'

export type ModelType = 'vectorial'

type useFetchSearchProps = {
  q: string
  limit?: number
  offset?: number
  dataset?: DatasetType
  model?: ModelType
}

const useFetchSearch = ({ q, dataset, model }: useFetchSearchProps) => {
  return useQuery<SearchOutput>('search-api', () => queryApi.search({ data: { q, dataset, model } }), {
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}

export default useFetchSearch
