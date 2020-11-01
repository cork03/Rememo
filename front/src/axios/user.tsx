import axios from 'axios'

const base = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


export const createUser = async({data}: any) => {
    const result = await base.post(
        "/auth/signUp",
        data
    )
    return result
}
