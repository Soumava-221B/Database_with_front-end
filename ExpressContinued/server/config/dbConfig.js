const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cvtSept').then(() => {
    console.log('Successfully connected to db')
}).catch((err) => {
    console.log('Error connection to db!')
})