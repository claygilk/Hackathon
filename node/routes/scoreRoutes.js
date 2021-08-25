const express = require('express')
const scoreController = require('../controllers/scoreController.js') 

const router = express.Router()

router.get('/', scoreController.get_all_scores)

router.post('/', scoreController.add_score)

module.exports = router