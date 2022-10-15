const mongoose = require('mongoose')

//schema tells us what we cannot do
const logSchema = new mongoose.Schema({
    title:{type:string , required: true},
    entry:{type:string, required:true},
    shipIsBroken: Boolean
},{timestamps:true})

const Log = mongoose.model('Log', logSchema)
module.exports = Log