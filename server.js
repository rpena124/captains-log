require('dotenv').config()
//load express framework
const express = require('express')
const methodOverride = require('method-override') //this has to do with Delete route
const db = require('./models/db')
//create and express app
const app = express()
app.use(express.urlencoded({extended:true})) //This allows us to parse incoming request
app.use((req, res, next)=>{
    res.locals.data = {}
    next()
})

//view engine
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

//database connection mongoose
db.once('open', () =>{
    console.log('Connected to Mongoose db')
})

//middleware
app.use(methodOverride('_method'))

//We are going to statically show whats in the public directory
app.use(express.static('public'))

//link to the controller files
app.use('/logs', require('./controllers/routeController'))

//Tell the app to listen on a port
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})