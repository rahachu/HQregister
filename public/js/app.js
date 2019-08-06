const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// Elements to edit from the page
const getForecast = document.querySelector('#getForecast')
const getLocation = document.querySelector('#getLocation')
const getAddress = document.querySelector('#getAddress')
const searchResultBox = document.querySelector('.searchResult')

getForecast.innerHTML = ''
getLocation.innerHTML = ''
getAddress.innerHTML = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value
    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
                getForecast.innerHTML = data.forecast
                getLocation.innerHTML = data.location
                getAddress.innerHTML = data.address
                searchResultBox.style.backgroundImage = 'linear-gradient(to right, rgba(100,100,100,0.5), rgba(100,100,100,0.5))'
            }
        })
    })
})





