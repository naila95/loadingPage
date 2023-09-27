let loadingPage = document.getElementById("loading-page");
let main = document.getElementById("main");

setTimeout(Loading, 5000);

function Loading() {
  loadingPage.style.display = "none";
  main.style.display = "flex";
}

let input = document.querySelector(".inp");
let inputValue = input.value;
console.log(inputValue);

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 32) {
    console.log("space basildi");
    inputValue.slice(0, -1);
  }
  if (event.keyCode === 8) {
    console.log("backspace basildi");
    inputValue + " ";
  }
});
