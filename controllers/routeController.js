//Start our routes
//Import Express 
const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')

//INDEX
router.get('/', dataController.index, viewController.index)
//NEW
router.get('/new', viewController.newView)
//DELETE
router.delete('/:id', dataController.destroy ,viewController.redirectHome)
//UPDATE
//CREATE
router.post('/', dataController.create, viewController.redirectShow )
//EDIT
//SHOW
router.get('/:id', dataController.show, viewController.show)


module.exports = router