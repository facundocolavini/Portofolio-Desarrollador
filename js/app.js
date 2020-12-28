const hamburger= document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const about_id = document.getElementById("about-m");
const whatIDo_id = document.getElementById("what_i_do");
const jobs_id = document.getElementById("jobs");
const contc_id = document.getElementById("contc");


hamburger.addEventListener('click',( )=>{
    navLinks.classList.toggle('open');
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
});


about_id.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
});

whatIDo_id.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
});

jobs_id.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
});

contc_id.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
});