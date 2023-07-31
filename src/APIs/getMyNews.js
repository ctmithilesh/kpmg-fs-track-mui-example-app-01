import axios from "axios"
let api = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=5497647da2114041ad647eba8e002d6f'
let data = null
export const getMyNews = async () => {

    await axios.get(`${api}`)
        .then(res => {
            console.log(res)
            data = res.data.articles.splice(0, 20)
        })
        .catch(err => {
            console.log(err)

        })
    return data
}

