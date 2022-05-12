import { DatasetType, ModelType } from '~hooks/api/useFetchSearch'
import { AsyncFunction } from '~utils/types'

export type Document = {
  id: string
  text: string
}

export type SearchInput = {
  data: {
    q: string
    limit?: number
    offset?: number
    dataset?: DatasetType
    model?: ModelType
  }
}

export type SearchOutput = {
  query: string
  time: number
  results: Document[]
  limit: number
  offset: number
  total: number
  hasMore: boolean
}

export interface SearchApi {
  search: AsyncFunction<SearchInput, SearchOutput>
}
