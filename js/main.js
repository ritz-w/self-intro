var slides = [
  {
  title: "carousel-slide-1",
  text: "Hi, my name is Ritz. <br> (Yes, like the cracker, hotel, etc.)"
  },
  {
  title: "carousel-slide-2",
  text: "I am 27 years old, from California and Taiwan, <br> though I currently live in Asagaya, Tokyo."
  },
  {
  title: "carousel-slide-3",
  text: "Scroll below to find out more about me, <br> and why I want to apply to Founders and Coders."
  }
  ]

var carouselSide = document.getElementById("carousel-text")
var slideMaker = document.createElement("div")
var slideText = document.createElement("p")
slideMaker.id= slides[0].title;
slideText.innerHTML = slides[0].text;
slideMaker.appendChild(slideText)
carouselSide.appendChild(slideMaker);

var getButton = document.getElementById("downbutton")
getButton.addEventListener("click", expandText);

var i = 1;
function expandText() {
  if (i<2) {
  var slideMaker = document.createElement("div")
  var slideText = document.createElement("p")
    slideMaker.id= slides[i].title;
    slideText.innerHTML = slides[i].text;
    slideMaker.appendChild(slideText)
    carouselSide.appendChild(slideMaker);
    i=(i+1);
    } else if (i==2) {
    var slideMaker = document.createElement("div")
    var slideText = document.createElement("p")
    slideMaker.id= slides[i].title;
    slideText.innerHTML = slides[i].text;
    slideMaker.appendChild(slideText)
    carouselSide.appendChild(slideMaker);
      getButton.style.display = "none";
    }
  }


//make top button appear when scroll down past 300px
myID = document.getElementById("top-button");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.className = "topButton show"
  } else {
    myID.className = "topButton hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

//make top button go back up when pressed

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


