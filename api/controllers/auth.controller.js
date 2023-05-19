//Required model to use
const User = require('../models/user.model')
//Required for Crypt password
const bcrypt = require('bcrypt')

//Function to send username and password to login route
// -> save on database User with params of Req.Body
const signup = (req, res) => {

    const user = User.create({
        name: "Pepon",
        email: req.body.name
        password: 
    })

}

module.exports = { signup }