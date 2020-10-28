import Axios from 'axios'
const service = Axios.create({
    baseURL: 'https://www.fastmock.site/mock/b675bb1e2cda570396f7e7067480b153/admin',
    timeout:3000
})
export default service