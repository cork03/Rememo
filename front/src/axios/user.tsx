import axios from 'axios'
import './setting'

// ユーザーの作成

export const createUser = async({data}: any) => {
    const user = {user: data}
    const result = await axios.post(
        "/auth/signUp",
        user,
    )
    return result
}

// ログイン

export const userLogin = async({data}: any) => {
    const result = await axios.post(
        "/auth/login",
        data,
    )
    return result
}
