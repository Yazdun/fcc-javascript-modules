import "./style.css";
import { getRandomColor, changeButtonText } from "./utils";

document.querySelector("#app").innerHTML = `
  <div>
    <button id="flipper" type="button">Start Flipping</button>
  </div>
`;

document.querySelector("#flipper").addEventListener("click", () => {
  const body = document.body;
  const randomColor = getRandomColor();
  changeButtonText(`Current Color is ${randomColor}`, "#flipper");
  body.style.backgroundColor = randomColor;
});
