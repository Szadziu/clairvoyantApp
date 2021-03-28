const addButton = document.querySelector(".add");
const resetButton = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const input = document.querySelector("input");
const screenResult = document.querySelector("h1");

const arrayOptions = [];

const checkValue = (item) => arrayOptions.some((element) => element === item);

const addOptions = (e) => {
  e.preventDefault();

  if (!input.value) {
    return;
  } else if (checkValue(input.value)) {
    console.log("checked");
    return;
  }

  arrayOptions.push(input.value);
  input.value = "";
};

const resetArray = (e) => {
  e.preventDefault();
  arrayOptions.length = 0;
  screenResult.textContent = "";
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
