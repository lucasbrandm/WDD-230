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

function getData() {
    try {
        fetch("./js/towndata.json")
            .then(response => response.json())
            .then(data => {               
                drawData(data.towns)
            })
    }
    catch(e) {
        console.log(e);
    }

}

function drawData(towns) {
    console.log(towns)

    towns.forEach(town => {
      try {
        div = document.getElementById(town.name);
        let imgDiv = document.createElement('div');
        let textDiv = document.createElement('div');
        let cityName = document.createElement('h2');
        let img = document.createElement('img');
        let motto = document.createElement('h5');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainfall = document.createElement('p');

        imgDiv.setAttribute('id', 'imgDiv')
        textDiv.setAttribute('id', 'textDiv')

        cityName.textContent = town.name;
        img.setAttribute('src', "./images/" + town.photo);
        motto.textContent = town.motto;
        yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
        population.textContent = `Population: ${town.currentPopulation}`;
        annualRainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

        imgDiv.appendChild(img)
        textDiv.appendChild(cityName);
        textDiv.appendChild(motto);
        textDiv.appendChild(yearFounded);
        textDiv.appendChild(population);
        textDiv.appendChild(annualRainfall);

        div.appendChild(imgDiv);
        div.appendChild(textDiv);
      }
      catch(e){
          console.log("Town not found in page")
      } 
    });
}

function redirect(destination) {
  window.location.href = destination;
}