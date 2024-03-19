
let divs = document.querySelectorAll("#questionRow > div");

for (let div of divs) {
  let p = div.querySelectorAll("p");

  for (let item of p) {
    item.style.display = "none";
    item.style.fontSize = "15px";
  }

  div.addEventListener("click", () => {
    for (let item of p) {
      item.style.display = item.style.display === "none" ? "block" : "none";
    }
  });
}