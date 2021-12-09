/*Functions to take care of the toggable menu*/
function toggleMenu() {
    let nav = document.querySelector('#primNav');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }
  
  window.onresize = () => {
    let htmlElement = document.getElementsByTagName('html');
    let nav = document.querySelector('#primNav');
    if (htmlElement[0].offsetWidth >= 700) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  };

  //Functions to do Temple Work
  async function loadTemples(){
    idahoFalls = await fetchTemple("103")
    idahoFallsTemp = await fetchTemperature(idahoFalls.weatherAPI_city_id)
    drawTemple(idahoFalls)
    drawTemperature(idahoFallsTemp)

    kansasCity = await fetchTemple("108")
    kansasCityTemp = await fetchTemperature(kansasCity.weatherAPI_city_id)
    drawTemple(kansasCity)
    drawTemperature(kansasCityTemp)

    oklahomaCity = await fetchTemple("109")
    oklahomaCityTemp = await fetchTemperature(oklahomaCity.weatherAPI_city_id)
    drawTemple(oklahomaCity)
    drawTemperature(oklahomaCityTemp)

    rexburg = await fetchTemple("198")
    rexburgTemp = await fetchTemperature(rexburg.weatherAPI_city_id)
    drawTemple(rexburg)
    drawTemperature(rexburgTemp)
  }


const fetchTemple = async (id) => {
  let response = await fetch("https://nathan-byui-api.herokuapp.com/temples/" + id, {
    headers: {
      'apiKey': 'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
    }
  })
  let data = await response.json()
  return data
}

const fetchTemperature = async (id) => {
  let response = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=77b87ca303e14f319d3a5d4a56dbfcd7&units=imperial")
  let data = await response.json()
  return data
}

function drawTemple(temple){
  div = document.getElementById("content")
  
  card = document.createElement('div')
  card.setAttribute('id', 'temple')

  templeName = document.createElement('h2')
  templeName.textContent = temple.name
  card.appendChild(templeName)

  templePic = document.createElement('img')
  templePic.setAttribute('src', temple.imageurl)
  card.appendChild(templePic)

  templeAddress = document.createElement('p')
  templeAddress.textContent = "Address: " + temple.address1 + " " + temple.city + ", " + temple.state + "  " + temple.zip
  card.appendChild(templeAddress)

  templePhone = document.createElement('p')
  templePhone.textContent = 'Telephone: ' + temple.phone
  card.appendChild(templePhone)

  servicesMessage = document.createElement('p')
  servicesMessage.textContent = "Services: "
  card.appendChild(servicesMessage)
  templeServices = document.createElement('ul')
  for (i = 0; i < temple.services.length; i++) {
    service = document.createElement('li')
    service.textContent = temple.services[i]
    templeServices.appendChild(service)
  }
  card.appendChild(templeServices)

  historyMessage = document.createElement('p')
  historyMessage.textContent = "History: "
  card.append(historyMessage)
  templeHistory = document.createElement('ul')
  for (i = 0; i < 2; i++){
    fact = document.createElement('li')
    fact.textContent = temple.Summary.facts[i]
    templeHistory.appendChild(fact)
  }
  card.appendChild(templeHistory)

  closureMessage = document.createElement('p')
  closureMessage.textContent = "Closure Dates: "
  card.append(closureMessage)
  closureList = document.createElement('ul')
  thisYear = document.createElement('li')
  thisYear.textContent = '2021'

  closureList.appendChild(thisYear)

  nextYear = document.createElement('li')
  nextYear.textContent = '2022'
  closureList.appendChild(nextYear)

  card.appendChild(closureList)

  div.appendChild(card)
}

function drawTemperature(temperature){
  table = document.getElementById('weatherTable')

  entry = document.createElement('tr')

  entryTemple = document.createElement('td')
  entryTemple.textContent = temperature.name
  entry.appendChild(entryTemple)

  entryWeather = document.createElement('td')
  entryWeather.textContent = temperature.weather[0].main
  entry.appendChild(entryWeather)

  entryTemp = document.createElement('td')
  entryTemp.textContent = temperature.main.temp + " °F"
  entry.appendChild(entryTemp)

  table.appendChild(entry)
}