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

input.oninput = function () {
  let search = input.value;
  array.forEach((item) => {
    if (search === item) {
      console.log("done");
    }
  });
};
