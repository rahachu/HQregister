const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        console.log('auth' +  req.token)
        console.log('auth '+ req.user.tokens)
        const token_filter = req.user.tokens.filter((token) => {
            return token.token === req.token
        })
        if (!token_filter) {
            throw new Error()
        }
        next()
    } catch (error) {
        return res.status(501).send({error : 'Please authenticate.'})
    }
}

module.exports = auth
