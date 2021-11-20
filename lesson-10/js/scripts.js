d = new Date()

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

const monthName = months[d.getMonth()]
const dayName = days[d.getDay()]

formatted_date = dayName + ', ' + d.getDate() + " " + monthName + " " + d.getFullYear();
document.getElementById("date").innerHTML = formatted_date;

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

if (d.getDay() == 5) {
  var newDiv = document.createElement("div"); 
  newDiv.classList.add("alert");   
  var newItem = document.createElement("p"); 
  newDiv.appendChild(newItem);  
  var textnode = document.createTextNode("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");  
  newItem.appendChild(textnode);

  var list = document.getElementById("body");
  list.insertBefore(newDiv, list.childNodes[0]);
}