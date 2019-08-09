const search_form = document.querySelector('form')
const search = document.querySelector('input')
// console.log(search_form)
// console.log(search)

const table = document.querySelector('table')
// console.log(table)
console.log(table.innerHTML)

search_form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('test')
    const input_search = search.value
    console.log(input_search)
    fetch('/users/hasil_cari?nama_lengkap=' + input_search).then((response) => {
        response.json().then((data) => {
            if (data.length === 0) {
                table.innerHTML = '<tr><th class="d-none d-sm-table-cell">NoDataExists</th></tr>'
            } else {
                table.innerHTML = ''
                for (var key in data) {
                    // console.log(data[key])
                    table.innerHTML = table.innerHTML + '<tr><th class="d-none d-sm-table-cell">' + data[key].nama_lengkap + '</th><th class="d-none d-sm-table-cell">'+ data[key].tanggal_sewa + '</th><th class="d-none d-sm-table-cell">'+ data[key].tower + '</th><th class="d-none d-sm-table-cell">' + data[key].lantai + '</th></tr>'
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


