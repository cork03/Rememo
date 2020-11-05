import axios from 'axios'

// カードの取得

export const fetchCard = async() => {
    const result = await axios.get(
        "/cards",
        {headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5JZCI6ImhvZ2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2MDQzMjMzMjd9._cgyUiB5LlQTvICbUKR3X2jGDwHjoCi8i2lbAtoejzs`,
          }
        }
    )
    return result.data
}
