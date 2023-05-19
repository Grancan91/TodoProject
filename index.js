
//1.Require of Enviroments Variable
require('dotenv').config()

// 
const router = require('./api/routes/index.route')

//1.Declaracion del Servidor
const express = require('express')
const app = express()

const start = async () => {
    try {
        //1 Add Routes for Server Listen
        app.get('/', (req, res) => res.send('Fruting'))

        //2. Add new routes to server: 
        app.use('/api', router)



        //  Server Start Listen
        await app.listen(process.env.PORT)<<
        
        //2. Method to connect DB from sequelize
        await connectDB()
    } catch (err) {
        console.log(err)
    }
}

//2. Import sequelize index from ./db for connect to DB

const sequelize = require('./db')
const connectDB = async () => {
    try {
        //Authenticate the connection
        await sequelize.authenticate()
        console.log("Connected to DB")

        //Sync DB with Models
       // await sequelize.sync()
      //  console.log("DB Sync")

    } catch (error) {
        console.log(error)
        throw new Error('Cannot connect to DB')
    }
}


//APP Start
start()