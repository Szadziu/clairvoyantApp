const addButton = document.querySelector(".add");
const resetButton = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const input = document.querySelector("input");
const screenResult = document.querySelector("h1");

const arrayOptions = [];

const addOptions = (e) => {
  e.preventDefault();
  if (!input.value) {
    return;
  }
  let userValue = input.value;
  arrayOptions.push(userValue);
  input.value = "";
};

const resetArray = (e) => {
  e.preventDefault();
  arrayOptions.length = 0;
};

const showHint = () => {
  const rdmIndex = Math.floor(Math.random() * arrayOptions.length);
  screenResult.textContent = arrayOptions[rdmIndex];
};

const showPossibilities = () => {
  newArray = arrayOptions.join(" --- ");
  screenResult.textContent = newArray;
};

addButton.addEventListener("click", addOptions);
resetButton.addEventListener("click", resetArray);
showAdvice.addEventListener("click", showHint);
showOptions.addEventListener("click", showPossibilities);
