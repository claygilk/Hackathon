const Score = require('../models/score.js')

const add_score = (req, res) => {
    console.log('Adding score... ')
    
    const newScore = new Score(req.body)
    
    newScore.save()
        .then(() => {
            
            res.status(201).send()
        })
        .catch(err => {
            
            console.log(err)
            res.status(304).send()
        })
}

const get_all_scores = (req, res) => {
    console.log('Getting scores...')

    const username = req.query.username

    Score.find({ username: username })
        .then(records => {

            res.status(200).send(records)
        })
        .catch(err => {

            console.log(err)
            res.status(404).send()
        })    
}

module.exports = {
    add_score,
    get_all_scores,
}