const add = document.querySelector('#add');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('h1');
let count = 0;
add.addEventListener("click",() =>{
    count++;
    h1.textContent = count;
})

reset.addEventListener("click", () => {
  h1.textContent = 0;
});