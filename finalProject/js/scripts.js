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