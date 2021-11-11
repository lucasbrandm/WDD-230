const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getPerson() {
    try {
        start_time = new Date().getTime();
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                end_time = new Date().getTime() - start_time;
                drawPerson(data.results[0], end_time)
            })
    }
    catch(e) {
        console.log(e);
    }

}

function drawPerson(person, timeElapsed) {
    console.log(person)
    console.log(person.picture.large);
    console.log(person.name.first + " " + person.name.last)
    console.log(person.gender);
    console.log(person.email);
    console.log(person.login.password);
    console.log(person.location.city + ", " + person.location.country)
    dateOfBirth = new Date(person.dob.date)
    console.log(dateOfBirth.getDate() + " of " + monthNames[dateOfBirth.getMonth()])
    console.log(timeElapsed)
}