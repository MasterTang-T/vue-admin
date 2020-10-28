import Axios from 'axios'
const service = Axios.create({
    baseURL: 'localhost:3000',
    timeout:3000
})
export default service