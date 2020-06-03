
let HeadingColorChange = () => {
  myfirstheading.style.color = "black";
}
let HeadingColorReChange = () => {
  myfirstheading.style.color = "75A1BE";
}

let myfirstheading = document.getElementById('Heading-1');
myfirstheading.addEventListener('mouseenter',HeadingColorChange)
myfirstheading.addEventListener('mouseleave', HeadingColorReChange)

let SubHeadingColorChange = () => {
  subheading.style.color = "black";
}
let SubHeadingColorReChange = () => {
  subheading.style.color = "75A1BE";
}

let subheading = document.getElementById('Heading-2');
subheading.addEventListener('mouseenter',SubHeadingColorChange)
subheading.addEventListener('mouseleave', SubHeadingColorReChange)
