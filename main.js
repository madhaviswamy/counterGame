let countEr = document.getElementById("count_er");

console.log(countEr);

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
