const search_form = document.querySelector('form')
const search_tower = document.querySelector('#search_tower')
const search_lantai =document.querySelector('#search_lantai')
// console.log(search_form)
// console.log(search)

const table = document.querySelector('table')
// console.log(table)
console.log(table.innerHTML)

search_form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submit is functioning correctly.')
    const input_tower = search_tower.value
    const input_lantai = search_lantai.value
    fetch('/tower/hasil_cari?tower=' + input_tower + '&lantai=' + input_lantai).then((response) => {
        response.json().then((data) => {
            if (data.length === 0) {
                table.innerHTML = '<tr><th class="d-none d-sm-table-cell">NoDataExists</th></tr>'
            } else {
                table.innerHTML = '<tr><th class="d-none d-sm-table-cell">Nama Lahan Tower</th><th class="d-none d-sm-table-cell">Lantai</th><th class="d-none d-sm-table-cell">Harga</th><th class="d-none d-sm-table-cell">Status Terjual</th></tr>'
                for (var key in data) {
                    // console.log(data[key])
                    table.innerHTML = table.innerHTML + '<tr><th class="d-none d-sm-table-cell">' + data[key].tower + '</th><th class="d-none d-sm-table-cell">'+ data[key].lantai + '</th><th class="d-none d-sm-table-cell">'+ data[key].harga + '</th><th class="d-none d-sm-table-cell">' + data[key].terjual + '</th></tr>'
                }
            }
        })
    })
    // fetch('/users/hasil_cari?nama_lengkap='+ input_search).then((e) => {
        
        // response.json().then((data) => {
        //     if (!data) {
                
        //         const html_gagal = Mustache.render(search_result_template, {
        //             nama_lengkap : 'gagal',
        //             tanggal : 'pencarian',
        //             tower : 'tidak ada',
        //             lantai : 'data'
        //         })
        //         table.insertAdjacentElement('beforebegin', html_gagal)
        //     } else {
        //         let html = undefined
        //         for (var key in data) {
        //             html = Mustache.render(search_result_template, {
        //                 nama_lengkap : data[key].nama_lengkap,
        //                 tanggal : data[key].tanggal,
        //                 tower : data[key].tower,
        //                 lantai : data[key].lantai
        //             })
        //             table.insertAdjacentElement('beforebegin', html)
        //         }
        //     }
        // })
    
})


// console.log('test')


