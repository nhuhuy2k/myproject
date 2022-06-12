import mongoose from "mongoose"

async function connect() {
    try {
        await mongoose.connect('mogodb://localhost:27017/mobile_shop_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect false!!!')
    }
}

module.exports= {connect}