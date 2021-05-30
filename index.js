var card = document.querySelector('.card')
var btnFront = document.querySelector('.header i');
var btnBehind = document.querySelector('.behind .button')
btnFront.addEventListener('click',()=>{
    card.classList.toggle('active')
})
btnBehind.addEventListener('click',()=>{
    card.classList.toggle('active')
})
var btnSubmit = document.querySelector('#check_weather')
var key = '23ea1d18608b4720262a930e903edbd2'
btnSubmit.addEventListener('click',()=>{
    var city = document.querySelector('input#city_name').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=vi`)
    .then(response=>response.json())
    .then(data=>{
        if(data.cod==404){
            alert('Không tìm thấy thành phố này')
            return
        }
        else{
            console.log(data)
            var cityName = document.querySelector('.header .name')
            cityName.innerHTML = data.name
            var nhietdo = document.querySelector('.nhietdo')
            var temp = Math.floor(data.main.temp - 273)
            var iconwheather = document.querySelector('.iconweather')
            var des = document.querySelector('.front_body .day')
            var doam = document.querySelector('.humidity')
            var windSpeed = document.querySelector('.wind_speed')
            var windDeg = document.querySelector('.wind_deg')
            doam.innerHTML = data.main.humidity + '%'
            windSpeed.innerHTML = data.wind.speed + 'm/s'
            windDeg.innerHTML = data.wind.deg + '<sup>o</sup>'
            des.innerHTML = data.weather[0].description
            iconwheather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            nhietdo.innerHTML = `${temp}<sup>o</sup>`
        }
    })
})
