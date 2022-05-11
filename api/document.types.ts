import { AsyncFunction } from '~utils/types'
import { Document } from './query.types'

export type DocumentDetailsInput = {
  params: { id: number }
}

export type DocumentDetailsOutput = {
  document: Document
}

export interface DocumentApi {
  findOne: AsyncFunction<DocumentDetailsInput, DocumentDetailsOutput>
}
