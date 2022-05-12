import { DatasetType } from '~hooks/api/useFetchSearch'
import { AsyncFunction } from '~utils/types'
import { Document } from './query.types'

export type DocumentDetailsInput = {
  params: {
    id: number
    dataset: DatasetType
  }
}

export type DocumentDetailsOutput = Document

export interface DocumentApi {
  findOne: AsyncFunction<DocumentDetailsInput, DocumentDetailsOutput>
}
