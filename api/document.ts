import axios from './utils/axios'
import { DocumentApi } from './document.types'

export default <DocumentApi>{
  findOne: ({ params: { dataset, id, ...params } }) =>
    axios.get(`/document/${dataset}/${id}`, { ...params }).then(r => r.data),
}
