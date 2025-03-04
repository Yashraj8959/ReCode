const mongoose = require('mongoose');

const connect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/recode' )
            .then(() => console.log('MongoDB Connected...'))
            .catch(err => console.error(err))
        
    } catch (error) {
        
    }
}

module.exports = connect;