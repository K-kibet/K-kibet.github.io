
//toggle navigation
{
    const topNav = document.querySelector('.topNav');
    const links = topNav.querySelectorAll('a');


    links.forEach(link => {
        link.onclick = () => {
            let i;
            for(i = 0; i<links.length; i++){
                links[i].classList.remove('active');
                if(links[i] === link){
                    links[i].classList.add('active');
                }
            }
            link.classList.add('active');
        }
    })
}

//faq
{
    const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
}


//toggle navigation

var responsiveNav = document.querySelector('.collapsibleNav');
const collapseBtn = document.querySelector(".collapseBtn");
const openBtn = document.querySelector(".openBtn");
const collapsibleNavs = document.querySelectorAll('.link')


const closeNav = (e) => {
  if(!e.target.closest('.responsiveNav') && e.target != openBtn){
    responsiveNav.style.display = 'none'
  }
}

document.addEventListener('click', closeNav);

function toggleCollapse(){
  responsiveNav.style.display = 'none'
}

function toggleOpen () {
 responsiveNav.style.display = 'flex'
}

function activeNav () {
  collapsibleNavs.forEach(item => {
    item.addEventListener('click', e => {
      collapsibleNavs.forEach(items => items.classList.remove('active') )
      item.classList.add('active')
    })
  })
}

activeNav()




//to top function
{
    const toTopBtn = document.getElementById('to-topBtn');
    
    //when the user scrolls down 20px from the top show the button
    window.onscroll = () => {
        if( document.body.scrollTop> 20 || document.documentElement.scrollTop > 20 ) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    }
    function toTop() {
        document.body.scrollTop = 0; //safari
        document.documentElement.scrollTop = 0;// chrome. firefox, IE & opera 
    }

    toTopBtn.addEventListener('click', toTop)
}

//auto-type

var typed = new Typed(".type", {

    strings : ["Software Developer.", "Web programmer.", "Full Stack Engineer", "Android Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true 
})

//canvas

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'canvas',
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

const assets = ['sass','mui','pwa',"npm","nodejs","git", "preact", "terminal",'html', 'firebase', 
'chrome', 'babel', 'aws', 'ansible', 'android', '702308', 'chrome-extension', 'docker', 
'graphql', 'kubernetes', 'typescript', 'react', "python", 'framer', 'ionic', 'express',
'next', 'mysql', 'spring', 'node1', 'bash', 'redux', 'kotlin', 'linux', 'c', 'xml', 'java']


assets.forEach(item => { 
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: Math.random() * 1250,
      y: Math.random() * 500,
      image: imageObj,
      width: 50,
      height: 50,
    });

    // add the shape to the layer
    layer.add(yoda);
  };
  imageObj.src ="./canvas/" + item + ".png";
})


//active nav
const li = document.querySelectorAll(".toplink");
const sec = document.querySelectorAll(".section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);