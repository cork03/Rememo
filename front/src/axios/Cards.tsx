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

// カードの作成

export const postCard = async({data}: any) => {
    const card = {card: data}
    console.log(card)
    await axios.post(
        "/cards",
        card,
        {headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW5JZCI6InRzdWJhc2EiLCJpYXQiOjE2MDUyNTU4MzB9.WJG7UR29uFNCAp5frAh5ogI4pPIHhasTBOhoXM3jlQs`,
          }
        }
    )
    return
}
