const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:6969/milestone-2', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
})