
let searchBtn = document.querySelector("#search");
let userCity = document.querySelector("#cityInput")
let TodayWeather = document.querySelector("#todayweather");
let days = document.querySelector("#days");
let cards = document.querySelector("#cards");
let forecasth1 = document.querySelector("#days");
let form = document.querySelector("#form");

let result = document.querySelector("#result");

let count = 0;



searchBtn.addEventListener('click', getGEO);


function getGEO(event) {
    event.preventDefault();
    let Citytosearch = userCity.value;
    if (Citytosearch) {
        let requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${Citytosearch}&limit=5&appid=fe5f18ad8da81e94eabca7fc60f10944`;
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                localStorage.setItem(`${Citytosearch} GEO`, JSON.stringify(data));
                getApi(data);
            })

    } else {
        userCity.setAttribute("placeholder", "Please enter a city name");
    }
}


function getApi(data) {
    let lat = data[0].lat;
    let lon = data[0].lon;

    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fe5f18ad8da81e94eabca7fc60f10944&units=metric`;
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem(`${userCity.value}`, JSON.stringify(data));
        todaysWeather(data);
        dateforecast(data);
        showingSearchedcity(data);
    })

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
    headingToday.innerHTML = userCity.value + " " + date;

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

function dateforecast(data) {

    if (count !== 0) {
        let section = document.querySelector("#cards");
        section.remove();
    }

    let section = document.createElement("section");
    section.setAttribute("id", "cards")
    section.setAttribute("class", "d-flex");

    days.setAttribute("style", "display:block");

    for (i = 0, j = 7; i < 5; i++, j = j + 8) {

        let div = document.createElement("div");
        div.classList = "card  border border-4 border-dark";
        div.setAttribute("style", "width: 14rem; margin-right: 24px;");


        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group");

        let dateli1 = document.createElement("li");
        dateli1.setAttribute("class", "list-group-item");
        dateli1.setAttribute("style", "font-size:1.4em; font-weight:bold;");

        let dateimg = document.createElement("li");
        let img = document.createElement("img");
        dateimg.setAttribute("class", "list-group-item");
        img.setAttribute("id", "date1img");

        let datetemp = document.createElement("li");
        datetemp.classList = "list-group-item textstyle";

        let datewind = document.createElement("li");
        datewind.classList = "list-group-item textstyle";

        let datehumidity = document.createElement("li");
        datehumidity.classList = "list-group-item textstyle";



        let datejs = dayjs(data.list[j].dt_txt).format('DD/MMM/YYYY');
        let date1conurl = "./assets/icons/" + data.list[j].weather[0].icon + ".png";

        dateli1.innerHTML = datejs;
        img.setAttribute("src", date1conurl);
        datetemp.innerHTML = "Temp: " + data.list[j].main.temp;
        datewind.innerHTML = "Wind: " + data.list[j].wind.speed + " Mph";
        datehumidity.innerHTML = "humidity: " + data.list[j].main.humidity;

        result.appendChild(section);
        section.appendChild(div);
        div.appendChild(ul);
        ul.append(dateli1, dateimg, datetemp, datewind, datehumidity);
        dateimg.appendChild(img)

        count++;

    }

}


function showingSearchedcity(data) {
    let divforsaved = document.createElement("div");
    let buttenforsaved = document.createElement("button");
    buttenforsaved.setAttribute("id", "savedcityBtn");
    buttenforsaved.setAttribute("class", "btn btn-primary savedcityBtn");
    buttenforsaved.setAttribute("value", userCity.value);
    buttenforsaved.setAttribute("onclick", 'callingsavedData(event)');
    buttenforsaved.innerHTML = userCity.value;
    form.appendChild(divforsaved);
    divforsaved.appendChild(buttenforsaved);

}


let callingsavedData = function (event) {
    event.preventDefault();
    let savedcity = event.target.getAttribute('value');
    let savedCityobject = JSON.parse(localStorage.getItem(savedcity));
    todaysWeather(savedCityobject);
    dateforecast(savedCityobject);
};

