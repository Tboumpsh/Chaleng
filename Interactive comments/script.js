let form = document.getElementById("form");
let text = document.getElementById("textA");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", clickButton);

function clickButton() {
  console.log('click');
  let li = document.createElement("li");
  let edit = document.createElement("span");
  let user = text.value;
  li.innerHTML = user;
  edit.innerHTML = '🖋️'
  li.append(edit)
  li.setAttribute('autocomplete' , 'on')
  ul.append(li)
}
