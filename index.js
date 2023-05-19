
//1.Require of Enviroments Variable
require('dotenv').config()

//1.Declaracion del Servidor
const express = require('express')
const app = express()

const start = async () => {
    try {
        //1 Add Routes for Server Listen
        app.get('/', (req, res) => res.send('Fruting'))
        //  Server Start Listen
        await app.listen(process.env.PORT)
        
        //2. Method to connect DB from sequelize
        connectDB()
    } catch (err) {
        console.log("pepe")
    }
}

//2. Import sequelize index from ./db for connect to DB

const sequelize = require('./db')
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        throw new Error('Cannot connect to DB')
    }
}


//APP Start
start()