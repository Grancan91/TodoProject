//Require sequelize instance for models and realtions
const sequelize = require('../../db')
//Require Datatypes for definitions
const { DataTypes } = require('sequelize')

//Define model
const User = sequelize.define('user',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:  {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
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