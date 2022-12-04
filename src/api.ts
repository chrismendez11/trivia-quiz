import axios from "axios"
import { Quiz } from "./types"

// api call for quiz & categories/difficulties options
const api = {
    quizzes: {
        list: async (category?: number, difficulty?: string): Promise<Quiz[] | undefined> => {
            if (category !== 0 && difficulty !== 'any') {
                return axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
                    .then(res => res.data.results)
                    .catch(err => console.log(err))
            } else if (category === 0 && difficulty !== 'any') {
                return axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
                    .then(res => res.data.results)
                    .catch(err => console.log(err))
            } else if (category !== 0 && difficulty === 'any') {
                return axios.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
                    .then(res => res.data.results)
                    .catch(err => console.log(err))
            } else {
                return axios.get('https://opentdb.com/api.php?amount=10')
                    .then(res => res.data.results)
                    .catch(err => console.log(err))
            }
        }
    },
    categories: [
        {
            name: "Any", number: 0
        },
        {
            name: "General Knowledge", number: 9
        },
        {
            name: "Sports", number: 21
        },
        {
            name: "VideoGames", number: 15
        }

    ],
    difficulties: ["any", "easy", "medium", "hard"]
}

export default api
