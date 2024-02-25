import changeTheme from "./src/js/theme.js";

const buttons = document.querySelectorAll(".buttons");
const inputArea = document.querySelector(".calculator__input-number");

buttons.forEach((button) => {

  //For delete auto-copy of text
  button.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  button.addEventListener("click", () => {
    const arrOfSymbols = ["%", "/", "*", "-", "+"];

    //if we twice pressed button with symbol
    let flag = false;
    arrOfSymbols.forEach((symbol) => {
      if (button.innerHTML === symbol && inputArea.innerHTML.at(-1) === symbol) {
        flag = true;
      }
    });
    if (flag) {
      flag = false;
      return;
    }
    
    // IF we pressed AC
    if (button.dataset.event === "clean-all") {
      inputArea.innerHTML = 0;
      return;
    }

    //IF WE PRESSED +/-
    if (button.dataset.event === "add-minus-before") {
      arrOfSymbols.forEach((symbol) => {
        if (inputArea.innerHTML.lastIndexOf(symbol) !== -1) {
          let positionOfSymbol = inputArea.innerHTML.lastIndexOf(symbol);
          let updateString = inputArea.innerHTML.slice(0, positionOfSymbol + 1) + "(-" + inputArea.innerHTML.slice(positionOfSymbol + 1) + ")";
          inputArea.innerHTML = updateString;
        }
      });
      if (Number.isFinite(+inputArea.innerHTML)) {
        inputArea.innerHTML = "-" + inputArea.innerHTML;
      }
      return;
    }

    //If we pressed %
    if (button.dataset.event === "percent") {
      if (Number.isFinite(+inputArea.innerHTML)) {
        inputArea.innerHTML = inputArea.innerHTML / 100;
        return;
      } else {
        return;
      }
    }

    //If we pressed *
    if (button.dataset.event === "multiplication") {
      inputArea.innerHTML += button.dataset.js;
      return;
    }

    //if we pressed =
    if (button.dataset.event === "result") {
      inputArea.innerHTML = eval(inputArea.innerHTML);
      return;
    }

    //If inputArea is empty, we need change 0 to current button innerHTML
    if (inputArea.innerHTML == 0) {
      inputArea.innerHTML = button.innerHTML;
    } else {
      inputArea.innerHTML += button.innerHTML;
    }
  });
});



