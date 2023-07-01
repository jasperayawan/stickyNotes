const mongoose = require('mongoose');

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
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