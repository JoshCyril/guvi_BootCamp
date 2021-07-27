const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const signupmodels = require('../models/signupmodels')

router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword
    })
    signUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})
router.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    signupmodels.findOne({ email: username })
        .then(user => {
            if (user) {
                bcrypt.compare(password, signupmodels.password, function (err, result) {
                    if (err) {
                        res.json({
                            message: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ username: signupmodels.username }, 'verySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: "login successful",
                            token: token
                        })
                    }
                    else {
                        res.json({
                            message: 'Password does not match'
                        })
                    }
                })
            }
            else {
                res.json({
                    message: "No user found"
                })
            }
        })

})
module.exports = router