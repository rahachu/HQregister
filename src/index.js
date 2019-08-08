const path = require('path')
const express = require('express')
require('./db/mongoose')
const xlsx = require('xlsx') // Entar
const hbs = require('hbs')
const app = express()
const fs = require('fs')

// Gaguna aslinya kudunya html aja 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Configurations
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

const port = process.env.PORT || 3000 

const User = require('../src/models/user')
const Tower = require('../src/models/tower')
// const ExcelData = require('../src/models/exceldata')
const kwitansi = require('../no_kwitansi.json')

// var wb = xlsx.readFile('./public/excel-file/Financial-Sample.xlsx')
// var ws = wb.Sheets['Sheet1']

// var json_data = xlsx.utils.sheet_to_json(ws)

// json_data.map((record) => {
// })

async function nomerKwitansi () {
    kwitansi.no_kwitansi += await 1
    try {
        var kwitansi_dir = path.join(__dirname, '../no_kwitansi.json')
        await fs.writeFile(kwitansi_dir, JSON.stringify(kwitansi), function (e) {
            if (e) {
                throw new Error(e)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

async function bikinFileExcel (nama_lengkap, no_kwitansi, tanggal, tower, lantai, harga_tower) {
    try {
        // console.log(tanggal)
        var bulan = Number(0)
        var readDir = path.join(__dirname, '../public/excel-file/osjur.xlsx')
        // console.log(readDir)
        console.log(tanggal)
        var temp_osjur = xlsx.readFile(readDir)
        var temp_osjur = temp_osjur.Sheets['Sheet1']
        var json_temp = xlsx.utils.sheet_to_json(temp_osjur)

        var json_new_temp = json_temp.map((record) => {
            var date_ = new Date(tanggal.split('/')[2], tanggal.split('/')[1] - 1, tanggal.split('/')[0] - 30)
            // console.log(date_)
            date_.setMonth(date_.getMonth() + bulan)
            var month = date_.getMonth() + 1
            bulan += 1
            record.TANGGAL = date_.getDate() + '/' + month + '/' + date_.getFullYear()
            record.JUMLAH = harga_tower
            record.TOTAL = harga_tower
            record.NO_KWT = no_kwitansi
            return record
        })

        var nama_dengan_strip = nama_lengkap.replace(/ /g, '-')
        var tanggal_sekarang = new Date(tanggal.split('/')[2], tanggal.split('/')[1] - 1, tanggal.split('/')[0] - 30)
        var bulan_sekarang = tanggal_sekarang.getMonth() + 1

        console.log(tanggal_sekarang.getDate() + '-' + bulan_sekarang + '-' + tanggal_sekarang.getFullYear() + '_' + tower + '_' + lantai)

        var newWB = xlsx.utils.book_new()
        var newWS = xlsx.utils.json_to_sheet(json_new_temp)
        xlsx.utils.book_append_sheet(newWB, newWS, 'Sheet1')
        const dir = path.join(__dirname, '../public/excel-file/' + nama_dengan_strip + '_' + tanggal_sekarang.getDate() + '-' + bulan_sekarang + '-' + tanggal_sekarang.getFullYear() + '_' + tower + '_' + lantai + '.xlsx')
        
        // console.log(dir)

        
        xlsx.writeFile(newWB, dir)
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}

async function cekTower (tower) {
    if (tower.terjual || !tower) {
        throw new Error ('Lahan tidak tersedia')
    } else {
        tower.terjual = true
        tower.statistik_terjual += 1
        return tower
    }
}

// ~~~~~~~~ USERS ROUTER ~~~~~~~~ //

app.get('/users', async (req, res) => {
    res.render('registrasi_user')
})

app.post('/users/create', async (req, res) => {
    const user = new User(req.body)

    try {
        await nomerKwitansi()
        const tower = await Tower.findOne({tower : req.body.tower, lantai : req.body.lantai})
        await cekTower(tower)
        await console.log(kwitansi)
        await bikinFileExcel(req.body.nama_lengkap, kwitansi.no_kwitansi, req.body.tanggal_sewa, req.body.tower, req.body.lantai, tower.harga)
        await tower.save()
        await user.save()
        await res.send(user)
    } catch (error) {
        let message = error
        await console.log(typeof(message))
        await res.send({
            message : 'Lahan tidak tersedia atau error internal server'
        })
    }
    
})

// ~~~~~~~ TOWER ROUTER ~~~~~~~ //
app.get('/tower', (req, res) => {
    res.render('registrasi_tower')
})

app.post('/tower/register', async (req, res) => {
    // console.log(req.body)
    const tower = new Tower(req.body)
    try {
        await tower.save()
        res.send({
            message : 'Successfully created a tower data'
        })
    } catch (e) {
        res.send(e)
    }
})

app.get('/tower/info', (req,res) => {

})

// ~~~~~~~ DATABASE EXCEL ~~~~~~~ //

app.get('/excel', (req,res) => {
    res.render('database_excel')
})

// ~~~~~~~ SERVER UP ~~~~~~~ //
app.get('', async (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})