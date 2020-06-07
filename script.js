// The functions below are used for the Hidden Text in the index page that shows up and also to change the font-size and font-color of the 'What are you..' heading

let FontChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "grey";
  myfirstheading.style.fontSize = "51";
  let x = document.getElementById('Ghost-text');
  x.innerText = "Do you miss your friends? Or are you learning something new?";

}

let FontReChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "white";
  myfirstheading.style.fontSize = "45";
  document.getElementById('Ghost-text').innerText = "";

}
// The functions below are used for the Hidden Text in the index page that shows up and also to change the font-color of the 'Description' subheading

let SubHeadingColorChange = () => {
  subheading.style.color = "grey";
  let y = document.getElementById('Ghost-text-2');
  y.innerText = "Can you imagine that it took us only thirty minutes to come up with this?";
}
let SubHeadingColorReChange = () => {
  subheading.style.color = "white";
  let y = document.getElementById('Ghost-text-2');
  y.innerText = "";
}

// The if statements below are used to underline the menu option of the page that is currently loaded.
if(window.location.pathname == "/index.html"){
document.getElementById("Home").style.textDecoration = "underline";
// sets a value for comparision and ensuring that the index page is active (to be used in the next for loop)
var x;
x = 1;
}
// Declarations for the events in the next if statement
let myfirstheading = document.getElementById('Heading-1');
let subheading = document.getElementById('Heading-2');

// Ensures that the events are for the index page to remove the error
if (x == 1){
  myfirstheading.addEventListener('mouseenter',FontChange)
  myfirstheading.addEventListener('mouseleave', FontReChange)

  subheading.addEventListener('mouseenter',SubHeadingColorChange)
  subheading.addEventListener('mouseleave', SubHeadingColorReChange)
}
// The if statements below are used to underline the menu option of the page that is currently loaded.

if(window.location.pathname == "/Team.html"){
document.getElementById("Team").style.textDecoration = "underline";
}

if(window.location.pathname == "/About.html"){
document.getElementById("About").style.textDecoration = "underline";
}

if(window.location.pathname == "/Resources.html"){
document.getElementById("Resources").style.textDecoration = "underline";
}

if(window.location.pathname == "/Contact.html"){
document.getElementById("Contact").style.textDecoration = "underline";
}
// CODE BELOW IS NOT RELEVANT FOR THE GITHUB!!!!!


// The if statements below are specific to the host computer
// The if statements below are used to underline the menu option of the page that is currently loaded.

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/index.html"){
document.getElementById("Home").style.textDecoration = "underline";
var x;
x = 1;
}

if (x == 1){
  myfirstheading.addEventListener('mouseenter',FontChange)
  myfirstheading.addEventListener('mouseleave', FontReChange)

  subheading.addEventListener('mouseenter',SubHeadingColorChange)
  subheading.addEventListener('mouseleave', SubHeadingColorReChange)
}

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/Team.html"){
document.getElementById("Team").style.textDecoration = "underline";
}

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/About.html"){
document.getElementById("About").style.textDecoration = "underline";
}

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/Resources.html"){
document.getElementById("Resources").style.textDecoration = "underline";
}

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/Contact.html"){
document.getElementById("Contact").style.textDecoration = "underline";
}
