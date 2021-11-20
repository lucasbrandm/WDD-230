const getWeatherData = async () => {   

    let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=77b87ca303e14f319d3a5d4a56dbfcd7&units=imperial")
    let data = await response.json()    
    let temps = parseData(data.list);
    drawData(temps)
    
    response2 = await fetch("https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=77b87ca303e14f319d3a5d4a56dbfcd7&units=imperial")
    data2 = await response2.json();
    drawCurrent(data2);
}

function parseData(weather) {
    today = new Date()
    let temps = []

    for (let i = 0; i < weather.length; i++) {
        if(weather[i].dt_txt.includes("18:00")) {
            date = new Date(weather[i].dt_txt)
            if (date.getDay() != today.getDay()) {
                temps.push(weather[i].main.temp_max + " " + weather[i].weather[0].icon)
            }
        }
    }
    
    if (temps.length < 5) {
        temps.push(weather.at(-1).main.temp_max + " " + weather.at(-1).weather[0].icon)
    }
    return temps;
}

function drawData(temps) {
    var today = new Date()
    for (let i=0; i < temps.length; i++) {
        //creating all the elements we need
        let container = document.getElementById('fiveDayIcons')
        let div = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let day = document.createElement('p')


        //treating the data so we can get temperature and icon
        temp_data = temps[i].split(" ");
        temperature = temp_data[0] + " °F";
        icon = temp_data[1];

        //setting up the css pics
        icon_link = "https://openweathermap.org/img/w/" + icon + ".png";
        img.setAttribute('src', icon_link);

        //styling things
        day.setAttribute('class', 'forecastTitle')
        p.setAttribute('class', 'forecastP')
        div.setAttribute('class', 'day')

        //adding everything to the HTML
        day_count = today.getDay() + (i + 1);
        if (day_count > 6) {
            day_count = i - 1;
        }
        day.textContent = days[day_count];
        div.appendChild(day);
        div.appendChild(img);
        p.textContent = temperature;
        div.appendChild(p);
        container.appendChild(div);
    }
}

function drawCurrent(current){
    document.getElementById("current").textContent = current.weather[0].main;
    document.getElementById("high").textContent = current.main.temp_max;
    document.getElementById("humid").textContent = current.main.humidity;
    document.getElementById("wind").textContent = current.wind.speed * 10;

    windChill();
}

function windChill() {
    var high = document.getElementById("high");
    console.log(high.textContent);

    var wind = document.getElementById("wind");
    console.log(wind.textContent);

    var chill = document.getElementById("chill")

    if ((high.textContent >= 50) && (wind.textContent >= 3)) {
        var t = high.textContent;
        var s = wind.textContent;
        s = Math.pow(s, 0.16);
        var f = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
        chill.textContent = f.toFixed() + " °F";
        console.log(f);
        }
    else {
        chill.textContent = "N/A";
    }
}