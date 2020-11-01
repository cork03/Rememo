import axios from 'axios'
import './setting'



export const createUser = async({data}: any) => {
    const user = {user: data}
    const result = await axios.post(
        "auth/signUp",
        user,
    )
    return result
}
