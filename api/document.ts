import axios from './utils/axios'
import { DocumentApi } from './document.types'

export default <DocumentApi>{
  findOne: ({ params }) => axios.get('/details', { params }).then(r => r.data),
}
