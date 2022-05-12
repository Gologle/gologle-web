import { DocumentDetailsOutput } from '~api/document.types'
import { useQuery } from '../../api/utils'
import documentApi from '~api/document'
import { DatasetType } from './useFetchSearch'

type useFetchDocumentProps = {
  id: number
  dataset: DatasetType
}

const useFetchDocument = ({ id, dataset }: useFetchDocumentProps) => {
  return useQuery<DocumentDetailsOutput>('details-api', () =>
    documentApi.findOne({ params: { id, dataset } })
  )
}

export default useFetchDocument
