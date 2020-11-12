import axios from 'axios'
import './/setting'

// カードの取得

export const fetchCard = async() => {
    const result = await axios.get(
        "/cards",
        {headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW5JZCI6InRzdWJhc2EiLCJpYXQiOjE2MDUwMTk2NjF9.YisG_fDTqY8UgdDySi-JlejYyfThvdy8u_3cb-iwp14`,
          }
        }
    )
    return result.data
}
