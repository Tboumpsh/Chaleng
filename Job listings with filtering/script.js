let array = [
  { name: "html", tags: ["developer", "Frontend", "CSS", "HTML"] },
  { name: "JavaScript", tags: ["developer", "Frontend", "CSS", "cleanCode"] },
  { name: "Photoshap", tags: ["design", "edit", "draw", "character"] },
  { name: "Frontend", tags: ["Junior", "backend", "cleanCode", "developer"] },
  { name: "python", tags: ["backend", "devops", "Frontend", "developer"] },
  { name: "devops", tags: ["render", "edit", "design", "video"] },
  { name: "devops", tags: ["render", "edit", "design", "video"] },
  { name: "devops", tags: ["render", "edit", "design", "video"] },
];

let input = document.getElementById("search");
let check = document.getElementById("box");
let all = document.querySelectorAll(".rightInfo");
// let info = document.getElementById("info");
let info = document.querySelectorAll(".information");
console.log(info);

input.oninput = function () {
  let search = input.value;

  array.forEach((item) => {
    let tags = item.tags;

    tags.forEach((tag) => {
      console.log(tag);
      if (search === tag) {
        console.log("done");
        let li = document.createElement("li");
        let a = document.createElement("span");
        li.textContent += `${tag}`;
        li.append(a);
        a.textContent += "❌";
        check.append(li);
        a.addEventListener("click", () => {
          li.classList.add("hide");
        });
      }
    });
  });

  console.log("note");
};

// all.forEach((e) => {
//   array.forEach((item) => {
//     item.tags.forEach((tag) => {
//       e.innerHTML += `<option>${tag}</option>`;
//     });
//   });
// });
all.forEach((divElement, index) => {
  divElement.innerHTML = `<option>${array[index].tags}</option>`;
});

input.oninput = function () {
  let search = input.value.toLowerCase();

  all.forEach((li) => {
    let found = false;

    li.classList.remove("found");
    li.style.display = "none";

    array.forEach((item) => {
      let tags = item.tags.map((tag) => tag.toLowerCase());
      if (
        tags.includes(search) &&
        li.textContent.toLowerCase().includes(item.name.toLowerCase())
      ) {
        found = true;
        li.style.display = "";
        return;
      }
    });

    if (found) {
      li.classList.add("found");
    }
  });
};
