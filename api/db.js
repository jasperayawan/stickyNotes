const mongoose = require('mongoose');

const connect = async() => {
    try{
        await mongoose.connect('',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Successfuly connected to mongodb!')
    }
    catch(err){
        console.log('not connected to mongodb!')
    }
}

module.exports = connect;