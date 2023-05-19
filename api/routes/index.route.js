const router = require('express').Router()

//router.get('/user', require('ruta del fichero '))
router.use('/auth', require('./auth.route'))
//router.get('/auth', () => {console.log("lksedkñljasdlkj")})

module.exports = router