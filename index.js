console.log("Hola")

//Declaracion del Servidor
const express = require('express')
const app = express()


const start = async () => {
    try {
        //Add Routes for Server Listen
        app.get('/', (req, res) => res.send('Fruting'))

        //Server Start Listen
        await app.listen(3000)
    } catch (err) {
        
    }
}