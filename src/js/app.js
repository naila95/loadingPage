let loadingPage = document.getElementById("loading-page");
let main = document.getElementById("main");

setTimeout(Loading, 5000);

function Loading() {
  loadingPage.style.display = "none";
  main.style.display = "flex";
}

let input = document.querySelector(".inp");

input.addEventListener("keydown", function (event) {
  let inputValue = input.value;
  if (event.keyCode === 32) {
    event.preventDefault();
    input.value = inputValue.slice(0, input.value.length - 1);
  }
  if (event.keyCode === 8) {
    input.value += " ";
    event.preventDefault();
  }
});
