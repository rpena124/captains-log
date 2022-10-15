require('dotenv').config()
//load express framework
const express = require('express')
const methodOverride = require('method-override')

//create and express app
const app = express()
app.use(express.urlencoded({extended:true}))
app.use((req, res, next)=>{
    res.locals.data = {}
        next()
    
})

//view engine
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

//middleware
app.use(methodOverride('_method'))

//link to the controller files
app.use('/logs', require('./controllers/routeController'))
//Tell the app to listen on a port
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})