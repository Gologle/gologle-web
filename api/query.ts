import axios from './utils/axios'
import { SearchApi } from './query.types'

export default <SearchApi>{
  search: ({ data }) => axios.get('/query', { params: data }).then(r => r.data),
}
