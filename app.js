//  input 

//  on click of btn , grap the input from the user


// ask the internet to give me wheatehre details of that city


// display the data in result block

const city = document.getElementById("city")
const search =  document.getElementById("search")


// on click of search button (adding event listener)

search.addEventListener("click",(e)=>{

    // grap input from city input field
    
    let cityName = city.value

    // ask open weatherapi to give me wheather data of that city

    let apiKey = "c6decc9a8fa5a131aa84a93f7bb3ee58"

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    fetch(api).then((response)=>{

       return response.json()
    })
    .then((response)=> {
        console.log(response)
        console.log(response.main.temp)
        document.getElementById("temp").innerText = response.main.temp
        document.getElementById("max_temp").innerText = response.main.temp_max
        document.getElementById("min_temp").innerText =response.main.temp_min
        document.getElementById("humidity").innerText =response.main.humidity
    })
    .catch((error)=>{
        console.log(error)
    })
    // display data of that city

})
















