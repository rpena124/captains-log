const {update} = require('../models/log')
const Log = require('../models/log')

const dataController = {
    //Index
    index(req, res, next){
        Log.find({},(err, foundFruit)=>{
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            }else{
                res.locals.data.logs = foundFruit
                next()
            }
        })
    },
    //CREATE
    create(req,res,next){
        req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false 
        Log.create(req.body , (err, createdLog)=>{
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            }else{
                res.locals.data.log = createdLog
                next()
            }
        })
    },
    show(req, res, next){
        Log.findById(req.params.id, (err, foundFruit)=>{
            if(err){
                res.status(404).send({
                    msg:err.message,
                    output:"Could not find fruit with that ID"
                })
            }else{
                res.locals.data.log = foundFruit
                next()
            }
        })
    }
}

module.exports = dataController