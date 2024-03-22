// select

let text = document.getElementById("text");
let slider = document.getElementById("slider");

// get slider value
let range = slider.value;
// slider value in text
text.value = range;
// update h1 value
slider.oninput = function () {
  text.innerHTML = `$ ${this.value}       <span>  /month </span>`;
};
