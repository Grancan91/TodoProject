//Require sequelize instance for models and realtions
const sequelize = require('./db')
//Require Datatypes for definitions
const { DataTypes } = require('sequelize')

//Define model
const User = sequelize.define('user',{
    email:  {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2,10],
        }
    }

})

module.exports = User