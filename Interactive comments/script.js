let form = document.getElementById("form");
let text = document.getElementById("textA");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", clickButton);

function clickButton() {
  if (text.value == "" || text.value == null) {
    alert("Write in the textArea");
  } else {
    console.log("click");
    let li = document.createElement("li");
    let edit = document.createElement("span");
    let delet = document.createElement("span");
    let replay = document.createElement("span");

    let p = document.createElement("p");
    replay.innerHTML += "↩️";
    let user = text.value;
    p.innerHTML = user;
    edit.innerHTML = "🖋️";
    delet.innerHTML += "🗑️";
    li.append(edit);
    li.append(p);
    li.append(delet);
    li.append(replay);
    li.setAttribute("autocomplete", "on");
    ul.append(li);
    edit.addEventListener("click", () => {
      p.contentEditable = true;
    });
    delet.addEventListener("click", () => {
      li.style.display = "none";
    });

  replay.addEventListener("click", () => {
    let list = document.createElement("ul");
    let newinput = document.createElement("input");
    let lir = document.createElement("li");
    
  });
}
}
