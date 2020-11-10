import axios from 'axios'
import './setting'

// カードの取得

export const fetchCard = async() => {
    const token = localStorage.getItem('token')
    const result = await axios.get(
        "/cards",
        {headers: {
            Authorization: `Bearer ${token}`,
          }
        }
    )
    return result.data
}
