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

if(window.location.pathname == "/index.html"){
document.getElementById("Home").style.textDecoration = "underline";

let myfirstheading = document.getElementById('Heading-1');
myfirstheading.addEventListener('mouseenter',FontChange)
myfirstheading.addEventListener('mouseleave', FontReChange)

let subheading = document.getElementById('Heading-2');
subheading.addEventListener('mouseenter',SubHeadingColorChange)
subheading.addEventListener('mouseleave', SubHeadingColorReChange)

}

if(window.location.pathname == "/Users/zunairviqar/Documents/GitHub/Zunairviqar.github.io/index.html"){
document.getElementById("Home").style.textDecoration = "underline";
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

// let Underline = ()=>{
//   Home.setAttribute("style", "text-decoration: underline");
//   let x = 1;
// }
//
// let Home = document.getElementById('Home');
// Home.addEventListener('click', Underline)
//
// let UnderlineTeam = ()=>{
//   Team.setAttribute("style", "text-decoration: underline");
//   let x = 1;
// }
//
// let Team = document.getElementById('Team');
// Team.addEventListener('click', UnderlineTeam)
