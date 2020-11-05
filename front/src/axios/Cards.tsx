import axios from 'axios'
import './/setting'

// カードの取得

export const fetchCard = async() => {
    const result = await axios.get(
        "/cards",
        {headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibG9naW5JZCI6Imh1Z2FAZXhhbXBsZS5jb20iLCJpYXQiOjE2MDQ1NzY3MTV9.Otyj463XrJgGfuRWIjXQ_FhkgAHgzbb8Ad-drtQmdTE`,
          }
        }
    )
    return result.data
}
