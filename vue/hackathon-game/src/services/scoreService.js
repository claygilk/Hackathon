import axios from 'axios'

export default {
    getScores(){
        console.log('calling api')

        // return axios.get('http://localhost:3000/scores')
        // https://scoresv1-atfvujdraq-uc.a.run.app
        return axios.get('https://scoresv1-atfvujdraq-uc.a.run.app/scores')
    },

    addScore(){
        console.log('adding score via api')

        let test = {
            username: 'BOB',
            point_total: 235
        }

        // return axios.post('http://localhost:3000/scores', test)
        return axios.post('https://scoresv1-atfvujdraq-uc.a.run.app/scores', test)
    }
}