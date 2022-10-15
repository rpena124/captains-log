const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser : true,
    userUnifiedTopology: true
})

module.exports = mongoose.connection