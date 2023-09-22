function changeTheme() {
  const buttonTheme = document.querySelector(".calculator-theme");

  const clearAllClasses = () => {
    buttonTheme.classList.remove("close-theme");
    if (buttonTheme.getAttribute("src") === "./moon.svg") {
      buttonTheme.setAttribute("src", "./sun.svg");
    } else {
      buttonTheme.setAttribute("src", "./moon.svg");
    }
    buttonTheme.classList.add("open-theme");

    const animationEndHandler = () => {
      buttonTheme.classList.remove("open-theme");
      buttonTheme.removeEventListener("animationend", animationEndHandler);
    };

    buttonTheme.addEventListener("animationend", animationEndHandler);
  };

  const changeColorOnCalculator = () => {
    document.querySelector(".calculator").classList.toggle("calculator--light-theme");
    document.querySelector(".calculator__inner-buttons").classList.toggle("calculator__inner-buttons--light-theme");
  };

  buttonTheme.addEventListener("click", () => {
    buttonTheme.classList.add("close-theme");
    changeColorOnCalculator();
    setTimeout(() => {
      clearAllClasses();
    }, 200);
  });
}
changeTheme();

export default changeTheme;
