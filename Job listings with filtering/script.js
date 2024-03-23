let array = [
  { name: "html", tags: ["developer", "Frontend", "CSS", "HTML"] },
  { name: "JavaScript", tags: ["developer", "Frontend", "CSS", "cleanCode"] },
  { name: "Photoshap", tags: ["design", "edit", "draw", "character"] },
  { name: "C", tags: ["Junior", "backend", "cleanCode", "developer"] },
  { name: "python", tags: ["backend", "devops", "Frontend", "developer"] },
  { name: "Premier", tags: ["render", "edit", "design", "video"] },
];

let input = document.getElementById("search");
let check = document.getElementById("box");
let select = document.querySelectorAll(".rightInfo");

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
