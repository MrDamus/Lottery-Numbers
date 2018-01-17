const button = document.querySelector("button");
const result = [];

const draw = function () {

  if(result.length === 6) return;

  const score = Math.floor(Math.random() * 49 + 1);

  for (let i = 0; i < result.length; i++) {
    if(score === result[i]) {
      return draw();
    }
  }

  const div = document.createElement("div");
  div.textContent = score;
  document.body.appendChild(div);
  result.push(score);
}

button.addEventListener("click", draw);