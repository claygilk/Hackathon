const express =  require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const scoreRoutes = require('./routes/scoreRoutes')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

const connectionString = 'mongodb+srv://netninja:test1234@nodetutorial.mjviw.mongodb.net/hackathon-db?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(result => {
        console.log('Succesfully Connected to Database');

        app.listen(3000)
    })
    .catch(error => {
        console.log(error);
    })

app.use(cors({
    origin: '*'
}))

app.use('/scores', scoreRoutes)
