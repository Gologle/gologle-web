import { DocumentDetailsOutput } from '~api/document.types'
import { useQuery } from '../../api/utils'
import documentApi from '~api/document'

type useFetchDocumentProps = {
  id: number
}

const useFetchDocument = ({ id }: useFetchDocumentProps) => {
  return useQuery<DocumentDetailsOutput>('details-api', () => documentApi.findOne({ params: { id } }), {})
}

export default useFetchDocument
