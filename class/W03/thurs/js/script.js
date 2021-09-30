document.getElementById('left').style.visibility = 'hidden';
document.getElementById('center').style.visibility = 'hidden';
document.getElementById('right').style.visibility = 'hidden';

//Showing elements after some time
setTimeout(function(){
    document.getElementById('left').style.visibility = 'visible';
}, 1000);

setTimeout(function(){
    document.getElementById('center').style.visibility = 'visible';
}, 2000);

setTimeout(function(){
    document.getElementById('right').style.visibility = 'visible';
}, 3000);

//Changing the color of the "Most Popular" div
document.getElementById('pop').style.backgroundColor = "#FFCF2D";

//Modifying the signup buttons
setTimeout(function(){
    document.getElementById('signup1').style.backgroundColor = "#FFCF2D";
    document.getElementById('signup2').style.backgroundColor = "#FFCF2D";
    document.getElementById('signup3').style.backgroundColor = "#FFCF2D";
}, 4000);

//Changing the size of 5.99
document.getElementById('changeFont').style.fontSize = "3.4em";

//display the popup for sign-in
function signUp(id){
    window.alert("User signed in!");
    var email = prompt("Email: ");

    p = document.createElement("p");
    p.innerHTML = email;
    document.getElementById("email" + id).appendChild(p);
    
}