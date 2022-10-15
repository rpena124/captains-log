const {update} = require()
const Log = require()

const dataController = {
    //CREATE
    create(req,res,next){
        req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false 
        Log.create(req.body , (err, createdLog)=>{
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            }else{
                res.local.data.fruit = createdLog
                next()
            }
        })
    }
}