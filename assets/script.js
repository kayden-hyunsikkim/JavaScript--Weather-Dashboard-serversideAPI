
let searchBtn = document.querySelector("#search");
let userCity = document.querySelector("#cityInput")
let TodayWeather = document.querySelector("#todayweather");

searchBtn.addEventListener('click', getApi);


function getApi(event) {
    event.preventDefault();
    let Citytosearch = userCity.value;
    if (Citytosearch) {
        let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + Citytosearch + '&appid=fe5f18ad8da81e94eabca7fc60f10944&units=metric';
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                todaysWeather(data, Citytosearch);
            })
    } else {
        userCity.setAttribute("placeholder", "Please enter a city name")
    }


}


function todaysWeather(data) {
    let date = dayjs().format('(D/MMMM/YYYY)');
    let today = document.createElement("div");
    let headingToday = document.createElement("h1");
    let spanE1 = document.createElement("span");
    let img = document.createElement("img");
    let temp = document.createElement("p");
    let wind = document.createElement("p");
    let humiditiy = document.createElement("p");

    let iconcode = data.list[0].weather[0].icon;
    var iconurl = "./assets/icons/" + iconcode + ".png";

    today.classList = "border border-4 border-dark ms-3 mt-3";
    today.setAttribute("style", "width: 76rem; height: 14rem;");

    headingToday.setAttribute("class", "element");
    headingToday.setAttribute("style", "display:inline-block;");
    headingToday.innerHTML = data.city.name + " " + date ;

    img.setAttribute("src", iconurl);
    img.setAttribute("id","img");

    temp.setAttribute("class", "element");
    temp.setAttribute("style", "font-size:20px;");
 
    
    temp.innerHTML = "Temp: " + data.list[0].main.temp;

    wind.setAttribute("class", "element");
    wind.setAttribute("style", "font-size:20px");
    wind.innerHTML = "Wind: " + data.list[0].wind.speed + "Mph";

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