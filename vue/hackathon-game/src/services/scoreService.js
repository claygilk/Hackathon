import axios from 'axios'

export default {
    getScores(){
        console.log('scoreService.getScores()')
        return axios.get('https://scoresv1-atfvujdraq-uc.a.run.app/scores')
    },

    getUserScores(initials){
        console.log('scoreService.getUserScores()')
        return axios.get('https://scoresv1-atfvujdraq-uc.a.run.app/scores/' + initials)
    },

    addScore(player, score){
        console.log('scoreService.addScore()')

        let record = {
            username: player.toUpperCase(),
            point_total: score
        }

        console.log('record: ', record)
        return axios.post('https://scoresv1-atfvujdraq-uc.a.run.app/scores', record)
    }
}