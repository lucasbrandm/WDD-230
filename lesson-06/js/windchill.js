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