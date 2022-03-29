const buttonOne = document.getElementById("homeButtonOne"); //.addEventListener("mouseover", addClass(e));
const buttonTwo = document.getElementById("homeButtonTwo"); //.addEventListener("mouseover", addClass(e));
buttonOne.addEventListener("mouseenter", addClassFirst);
buttonTwo.addEventListener("mouseenter", addClassSecond);

function addClassFirst() {
  buttonOne.classList.add("dotButton1");
  buttonOne.classList.remove("dotButtonBeforeClicked1");
}
function addClassSecond() {
  buttonTwo.classList.add("dotButton2");
  buttonTwo.classList.remove("dotButtonBeforeClicked2");
}
