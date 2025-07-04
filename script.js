
const textArray = ["Nishu Bhai", "a Creator", "a Digital Star", "an Influencer"];
let index = 0;
let charIndex = 0;
const speed = 100;
const typeSpan = document.querySelector(".typewriter");

function type() {
  if (charIndex < textArray[index].length) {
    typeSpan.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typeSpan.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed / 2);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
