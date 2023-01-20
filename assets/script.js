
let searchBtn = document.querySelector("#search");
let userCity = document.querySelector("#cityInput")
let TodayWeather = document.querySelector("#todayweather");
let forecastCard = document.querySelector("#cards");
let form = document.querySelector("#form");





searchBtn.addEventListener('click', getApi);


function getApi(event) {
    event.preventDefault();
    let Citytosearch = userCity.value;
    //let Citytosearch = result.toUpperCase();
    if (Citytosearch) {
        let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + Citytosearch + '&appid=fe5f18ad8da81e94eabca7fc60f10944&units=metric';
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                localStorage.setItem(Citytosearch, JSON.stringify(data));
                todaysWeather(data);
                date1forecast(data);
                date2forecast(data);
                date3forecast(data);
                date4forecast(data);
                date5forecast(data);
                showingSearchedcity(data);
            })
    } else {
        userCity.setAttribute("placeholder", "Please enter a city name")
    }

}


function todaysWeather(data, cityweather) {

    TodayWeather.textContent = cityweather;

    let date = dayjs().format('(D/MMMM/YYYY)');
    let today = document.createElement("div");
    let headingToday = document.createElement("h1");
    let spanE1 = document.createElement("span");
    let img = document.createElement("img");
    let temp = document.createElement("p");
    let wind = document.createElement("p");
    let humiditiy = document.createElement("p");

    let iconurl = "./assets/icons/" + data.list[0].weather[0].icon + ".png";

    today.classList = "border border-4 border-dark ms-3 mt-3";
    today.setAttribute("style", "width: 76rem; height: 14rem;");

    headingToday.setAttribute("class", "element");
    headingToday.setAttribute("style", "display:inline-block;");
    headingToday.innerHTML = data.city.name + " " + date;

    img.setAttribute("src", iconurl);
    img.setAttribute("id", "img");

    temp.setAttribute("class", "element");
    temp.setAttribute("style", "font-size:20px;");


    temp.innerHTML = "Temp: " + data.list[0].main.temp;

    wind.setAttribute("class", "element");
    wind.setAttribute("style", "font-size:20px");
    wind.innerHTML = "Wind: " + data.list[0].wind.speed + " Mph";

    humiditiy.setAttribute("class", "element");
    humiditiy.setAttribute("style", "font-size:20px");
    humiditiy.innerHTML = "Humiditiy : " + data.list[0].main.humidity;

    TodayWeather.appendChild(today);
    today.appendChild(headingToday);
    today.appendChild(spanE1);
    spanE1.appendChild(img);
    today.appendChild(temp);
    today.appendChild(wind);
    today.appendChild(humiditiy);
}

function date1forecast(data) {
    forecastCard.classList = ("class", "d-flex mt-6")

    let date1li1 = document.querySelector("#date1");
    let date1img = document.querySelector("#date1img");
    let date1temp = document.querySelector("#date1temp");
    let date1wind = document.querySelector("#date1wind");
    let date1humidity = document.querySelector("#date1humidity");


    let date1 = dayjs(data.list[7].dt_txt).format('D/MMMM/YYYY');
    let date1iconurl = "./assets/icons/" + data.list[7].weather[0].icon + ".png";

    date1li1.innerHTML = date1;
    date1img.setAttribute("src", date1iconurl);
    date1temp.innerHTML = "Temp: " + data.list[7].main.temp;
    date1wind.innerHTML = "Wind: " + data.list[7].wind.speed + " Mph";
    date1humidity.innerHTML = "humidity: " + data.list[7].main.humidity;


}

function date2forecast(data) {

    let date2li1 = document.querySelector("#date2");
    let date2img = document.querySelector("#date2img");
    let date2temp = document.querySelector("#date2temp");
    let date2wind = document.querySelector("#date2wind");
    let date2humidity = document.querySelector("#date2humidity");


    let date2 = dayjs(data.list[15].dt_txt).format('D/MMMM/YYYY');
    let date2iconurl = "./assets/icons/" + data.list[15].weather[0].icon + ".png";

    date2li1.innerHTML = date2;
    date2img.setAttribute("src", date2iconurl);
    date2temp.innerHTML = "Temp: " + data.list[15].main.temp;
    date2wind.innerHTML = "Wind: " + data.list[15].wind.speed + " Mph";
    date2humidity.innerHTML = "humidity: " + data.list[15].main.humidity;

}

function date3forecast(data) {

    let date3li1 = document.querySelector("#date3");
    let date3img = document.querySelector("#date3img");
    let date3temp = document.querySelector("#date3temp");
    let date3wind = document.querySelector("#date3wind");
    let date3humidity = document.querySelector("#date3humidity");


    let date3 = dayjs(data.list[23].dt_txt).format('D/MMMM/YYYY');
    let date3iconurl = "./assets/icons/" + data.list[23].weather[0].icon + ".png";
    date3li1.innerHTML = date3;
    date3img.setAttribute("src", date3iconurl);
    date3temp.innerHTML = "Temp: " + data.list[23].main.temp;
    date3wind.innerHTML = "Wind: " + data.list[23].wind.speed + " Mph";
    date3humidity.innerHTML = "humidity: " + data.list[23].main.humidity;

}

function date4forecast(data) {

    let date4li1 = document.querySelector("#date4");
    let date4img = document.querySelector("#date4img");
    let date4temp = document.querySelector("#date4temp");
    let date4wind = document.querySelector("#date4wind");
    let date4humidity = document.querySelector("#date4humidity");


    let date4 = dayjs(data.list[31].dt_txt).format('D/MMMM/YYYY');
    let date4iconurl = "./assets/icons/" + data.list[31].weather[0].icon + ".png";
    date4li1.innerHTML = date4;
    date4img.setAttribute("src", date4iconurl);
    date4temp.innerHTML = "Temp: " + data.list[31].main.temp;
    date4wind.innerHTML = "Wind: " + data.list[31].wind.speed + " Mph";
    date4humidity.innerHTML = "humidity: " + data.list[31].main.humidity;


}

function date5forecast(data) {

    let date5li1 = document.querySelector("#date5");
    let date5img = document.querySelector("#date5img");
    let date5temp = document.querySelector("#date5temp");
    let date5wind = document.querySelector("#date5wind");
    let date5humidity = document.querySelector("#date5humidity");


    let date5 = dayjs(data.list[39].dt_txt).format('D/MMMM/YYYY');
    let date5iconurl = "./assets/icons/" + data.list[39].weather[0].icon + ".png";
    date5li1.innerHTML = date5;
    date5img.setAttribute("src", date5iconurl);
    date5temp.innerHTML = "Temp: " + data.list[39].main.temp;
    date5wind.innerHTML = "Wind: " + data.list[39].wind.speed + " Mph";
    date5humidity.innerHTML = "humidity: " + data.list[39].main.humidity;

}


function showingSearchedcity(data) {
    let divforsaved = document.createElement("div");
    let buttenforsaved = document.createElement("button");
    buttenforsaved.setAttribute("id", "savedcityBtn");
    buttenforsaved.setAttribute("class", "btn btn-primary savedcityBtn");
    buttenforsaved.setAttribute("value", userCity.value);
    buttenforsaved.setAttribute("onclick", 'callingsavedData(event)');
    buttenforsaved.innerHTML = data.city.name;
    form.appendChild(divforsaved);
    divforsaved.appendChild(buttenforsaved);

 


}


let callingsavedData = function (event) {
    event.preventDefault();
    console.log("hi");
    let savedcity = event.target.getAttribute('value');
    let savedCityobject = JSON.parse(localStorage.getItem(savedcity));
    console.log(savedCityobject.list[0]);
    todaysWeather(savedCityobject);
    date1forecast(savedCityobject);
    date2forecast(savedCityobject);
    date3forecast(savedCityobject);
    date4forecast(savedCityobject);
    date5forecast(savedCityobject);



};

