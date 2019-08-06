const mongoose = require('mongoose')

const towerSchema = mongoose.Schema({
    tower : {
        type : String,
        required : true
    },
    lantai : {
        type : String,
        required : true
    },
    harga : {
        type : String,
        required : true
    },
    terjual : {
        type : Boolean,
        required : false,
        default : false
    },
    statistik_terjual : {
        type : Number,
        required : false,
        default : 0
    }
})

towerSchema.statics.findByCredentials = async (tower, lantai) => {
    const tower_cari = await Tower.findOne({tower, lantai})
    if (!tower_cari) {
        throw new Error('Tempat tidak tersedia')
    }
    if (tower_cari.terjual === true) {
        throw new Error('Tempat tidak tersedia')
    }
    return tower_cari
}

const Tower = mongoose.model('Tower', towerSchema)

module.exports = Tower

