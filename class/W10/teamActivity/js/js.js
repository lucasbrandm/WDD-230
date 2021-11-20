const getWeatherData = async () => {   
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=77b87ca303e14f319d3a5d4a56dbfcd7&units=imperial")
    const data = await response.json()    
    let temps = parseData(data.list);
    
    drawData(temps)
    
}

function parseData(weather) {
    today = new Date()
    let temps = []

    temps.push(weather[0].main.temp_max + " " + weather[0].weather[0].id);
    for (let i = 0; i < weather.length; i++) {
        if(weather[i].dt_txt.includes("18:00")) {
            date = new Date(weather[i].dt_txt)
            if (date.getDay() != today.getDay()) {
                temps.push(weather[i].main.temp_max + " " + weather[i].weather[0].id)
            }
        }
    }
    
    if (temps.length < 6) {
        temps.push(weather.at(-1).main.temp_max + " " + weather.at(-1).weather[0].id)
    }
    return temps;
}

function drawData(temps) {
    for (let i=1; i < temps.length; i++) {
        //creating all the elements we need
        let container = document.getElementById('temps')
        let div = document.createElement('div');
        let img = document.createElement('div');
        let p = document.createElement('p');

        //treating the data so we can get temperature and icon
        temp_data = temps[i].split(" ");
        temperature = temp_data[0] + " °F";
        icon = temp_data[1];

        //setting up the css pics
        icon_css = "wi wi-owm-" + icon;
        img.setAttribute('class', icon_css);

        //adding everything to the HTML
        p.textContent = temperature;
        div.appendChild(p);
        div.appendChild(img);
        container.appendChild(div);
    }
}