
let HeadingColorChange = () => {
  myfirstheading.style.color = "black";
}
let HeadingColorReChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.fontSize = "30";
}

let FontChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "black";
  myfirstheading.style.fontSize = "40";
}

let FontReChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "#75A1BE";
  myfirstheading.style.fontSize = "30";
}

let myfirstheading = document.getElementById('Heading-1');
// myfirstheading.addEventListener('mouseenter',HeadingColorChange)
// myfirstheading.addEventListener('mouseenter',HeadingColorReChange)
myfirstheading.addEventListener('mouseenter',FontChange)
myfirstheading.addEventListener('mouseleave', FontReChange)


let SubHeadingColorChange = () => {
  subheading.style.color = "black";
}
let SubHeadingColorReChange = () => {
  subheading.style.color = "75A1BE";
}

let subheading = document.getElementById('Heading-2');
subheading.addEventListener('mouseenter',SubHeadingColorChange)
subheading.addEventListener('mouseleave', SubHeadingColorReChange)
