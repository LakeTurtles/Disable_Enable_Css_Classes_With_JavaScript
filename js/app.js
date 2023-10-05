//  window event listener 

window.addEventListener('load', function(){
    document.querySelector('.preloader').style.display = "none";
});




// nav btn hamburger menu 

document.querySelector('.navBtn').addEventListener('click', function (){
    // document.querySelector('.nav').classList.add('nav--show');
    // document.querySelector('.nav').classList.hide('nav--show');
    document.querySelector('.nav').classList.toggle('nav--show');
});



