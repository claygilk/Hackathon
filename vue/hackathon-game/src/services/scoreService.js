import axios from 'axios'

export default {
    getScores(){
        console.log('scoreService.getScores()')
        return axios.get('https://scoresv1-atfvujdraq-uc.a.run.app/scores')
    },

    addScore(player, score){
        console.log('scoreService.addScore()')

        let record = {
            username: player,
            point_total: score
        }

        console.log('record: ', record)
        return axios.post('https://scoresv1-atfvujdraq-uc.a.run.app/scores', record)
    }
}