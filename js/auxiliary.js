//circle functionality
var windows = [
  {
  text: "I've found being able to make online projects and websites is an extremely useful skill to continuing my research in the arts. <br><br>While I hope to supplement my income through computer programming, I think gaining mastery of this tool and field of knowledge will help me to think more creatively and know what is possible when it comes to ideas to pursue in future."
  },
  {
  text: "The Founders and Coders curriculum provides hands on work experience and training in backend skills, beyond my current knowledge. <br><br>It also seems to place an emphasis on understanding the concepts thoroughly, which appeals to me a lot."
  },
  {
  text: "I'm interested in meeting new friends and collaborators from around the world."
  },
  {
  text: "I love coding as an activity that gives me pleasure, challenges me, and lets me make things. I made my first website at 13 (about my pet rat) and it's been a lifelong pursuit for me. <br><br>I'd like to know more, learn how to do more, and learn how to make something new."
  },
  {
  text: "I really think that technology has the potential to help people enjoy the world around them more, not less. <br><br>I'd like to become someone who can help make that happen by bringing tech to art, and potentially art to tech."
  },
  {
  text: "A sidenote, but it'd be great to represent a part of a growing number of queer women of color in tech."
  },
  {
  text: "I've had some experience up until now, mostly self-taught, and some of it gained through online courses. <br/><br/> But at this stage I need to learn to improve making my code cleaner, my way of structuring things more efficient and farsighted, and to practice different types of projects and requirements."
  }
  ]

var textBox = document.getElementById("text-area")
var tester = document.getElementById("secfourheadertext")
var circles = document.getElementsByClassName("circlehover")


var resetText = function() {
  textBox.innerHTML = "";
  }

var count = 0;
for (j=0; j<circles.length; j++) {
  circles[j].addEventListener("mouseover", function() {
    textBox.innerHTML = windows[count].text;
    count = (count+1) % circles.length;
  });
}
