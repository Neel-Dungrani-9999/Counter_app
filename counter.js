document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;

  const counterValue = document.getElementById("counter_value");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");
  const resetBtn = document.getElementById("reset");

  incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
  });
  
  decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
  });
  
  resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.textContent = counter;
  });

})