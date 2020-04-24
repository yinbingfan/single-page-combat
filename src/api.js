import Axios from "axios"

export const File_LIST = params => {
    return Axios.post('/', params)
}