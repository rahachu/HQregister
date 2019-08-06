
const xlsx = require('xlsx')
const path = require('path')

// EDIT NILAI no_kwitansi.json
async function nomerKwitansi () {
    kwitansi.no_kwitansi += await 1
    try {
        await fs.writeFile('./no_kwitansi.json', JSON.stringify(kwitansi), async function (e) {
            if (e) {
                return await console.log(e)
            }
        })
    } catch (e) {
        await console.log(e)
    }
    await console.log(kwitansi.no_kwitansi)
}

// BIKIN FILE XLSX

async function bikinFileExcel (nama_lengkap, no_kwitansi, tanggal, tower, lantai, harga_tower) {
    var bulan = Number(0)

    var temp_osjur = xlsx.readFile('./public/excel-file/osjur.xlsx')
    var temp_osjur = temp_osjur.Sheets['Sheet1']
    var json_temp = xlsx.utils.sheet_to_json(temp_osjur)
    
    var json_new_temp = json_temp.map((record) => {
        var date_ = new Date(tanggal.split('/')[2], tanggal.split('/')[1] - 1, tanggal.split('/')[0] - 30)
        date_.setMonth(date_getMonth() + bulan)
        var month = date_.getMonth() + 1
        bulan += 1
        record.TANGGAL = date.getDate() + '/' + month + '/' + date.getFullYear()
        record.JUMLAH = harga_tower
        record.TOTAL = harga_tower
        record.NO_KWT = no_kwitansi
        return record
    })
    
    var nama_dengan_strip = nama_lengkap.replace(/ /g, '-')
    var tanggal_sekarang = new Date()
    var bulan_sekarang = tanggal_sekarang.getMonth() + 1

    var newWB = xlsx.utils.book_new()
    var newWS = xlsx.utils.json_to_sheet(json_new_temp)
    xlsx.utils.book_append_sheet(newWB, newWS, 'Sheet1')
    const dir = path.join(__dirname, '/' + nama_dengan_strip + '_' + tanggal_sekarang.getDate() + '/' + bulan_sekarang + '/' + tanggal_sekarang.getFullYear() + '_' + tower + '_' + lantai + '.xlsx')
    
    xlsx.writeFile(newWB, dir)
}

module.exports = {
    nomerKwitansi,
    bikinFileExcel
}


