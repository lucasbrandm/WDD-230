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

formatted_date = dayName + ', ' + d.getDay() + " " + monthName + " " + d.getFullYear();
document.getElementById("date").innerHTML = formatted_date;

function toggleMenu() {
  document.getElementById("primNav").classList.toggle("hide")
}