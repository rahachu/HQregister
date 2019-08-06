const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    nama_lengkap: {
        type : String,
        required : true,
        unique : false
    },
    nomor_hp : {
        type : String, 
        required : true
    },
    tanggal_sewa : {
        type : String,
        required : true
    },
    tower : {
        type : String,
        required : true
    },
    lantai : {
        type : String,
        required : true
    }
})

// userSchema.methods.generateAuthToken = async function () {
//     const user = this
//     const token = jwt.sign({_id : user._id.toString()}, 'Bismillah')

//     user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }

userSchema.statics.findByCredentials = async (name, password) => {
    const user = await User.findOne({name})
    if (!user) {
        throw new Error('Wrong login information.')
    }
    if (user.password !== password) {
        throw new Error('Wrong login information')
    }
    return user
}

const User = mongoose.model('User', userSchema)
module.exports = User
