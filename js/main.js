var slides = {
  {
  title: "carousel-slide-1",
  text: "Hi, my name is Ritz. <br> (Yes, like the range of items, hotel, etc.)"
  },
  {
  title: "carousel-slide-2",
  text: ""
  },
  {
  title: "carousel-slide-3",
  text: ""
  }
}

document.getElementByClass("carousel-side").innerHTML = "<div class=" + slides[0].title + ">" + slides[0].text + "</div>"