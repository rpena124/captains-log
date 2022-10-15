//Start our routes
//Import Express 
const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')

//INDEX
//NEW
router.get('/new', viewController.newView)
//DELETE
//UPDATE
//CREATE
router.post('/', dataController.create, viewController.redirectShow )
//EDIT
//SHOW


module.exports = router