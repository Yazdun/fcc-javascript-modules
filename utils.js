import colorsData from "./colors";

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorsData.length);
  return colorsData[randomIndex];
}

export function changeButtonText(text, element) {
  const button = document.querySelector(element);
  button.innerText = text;
}
