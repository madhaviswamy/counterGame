let countEr = document.getElementById("count-er");
let saveEr = document.getElementById("save-er");

let count = 0;

function increment() {
  count = count + 1;
  countEr.innerText = count;
  console.log(countEr);
}

function decrement() {
  count = count - 1;
  countEr.innerText = count;
  console.log(countEr);
}

function save() {
  let countStr = " - " + count
  saveEr.textContent += countStr
  countEr.textContent = 0;
  count = 0;
}
