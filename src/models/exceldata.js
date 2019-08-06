const mongoose = require('mongoose')

const excelSchema = mongoose.Schema({
    nama_lengkap : {
        type : String,
        required : true
    },
    tanggal_sewa : {
        type : String,
        required : true
    }
})

const ExcelData = mongoose.model('Excel', excelSchema)

module.exports = ExcelData

