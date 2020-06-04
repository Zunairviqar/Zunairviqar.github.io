
let HeadingColorChange = () => {
  myfirstheading.style.color = "black";
}
let HeadingColorReChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.fontSize = "45";
}

let FontChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "grey";
  myfirstheading.style.fontSize = "51";
  let x = document.getElementById('Ghost-text');
  x.innerText = "Did you miss your friends? Or did you learn something?";

}

let FontReChange = () => {
  myfirstheading.position = "absolute";
  myfirstheading.style.color = "white";
  myfirstheading.style.fontSize = "45";
  document.getElementById('Ghost-text').innerText = "";

}

let myfirstheading = document.getElementById('Heading-1');
// myfirstheading.addEventListener('mouseenter',HeadingColorChange)
// myfirstheading.addEventListener('mouseenter',HeadingColorReChange)
myfirstheading.addEventListener('mouseenter',FontChange)
myfirstheading.addEventListener('mouseleave', FontReChange)


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

let subheading = document.getElementById('Heading-2');
subheading.addEventListener('mouseenter',SubHeadingColorChange)
subheading.addEventListener('mouseleave', SubHeadingColorReChange)
