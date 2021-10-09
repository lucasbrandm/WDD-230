let date = new Date();

document.getElementById("year").innerHTML = date.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified

function toggleMenu() {
    document.getElementById("primNav").classList.toggle("hide")
}