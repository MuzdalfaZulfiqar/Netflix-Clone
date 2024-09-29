
// parent element
const questionsContainer = document.querySelector(".Questions");
// child
const questionElements = questionsContainer.querySelectorAll(".question");
console.log(questionElements);
// dynamic name will be assigned
let className = "";
let targetElement;
let button1;

questionsContainer.addEventListener("click", (event) => {
  targetElement = event.target;

  questionElements.forEach((question, index) => {
    if (event.target.innerHTML == question.innerHTML) {
      className = `.question${index + 1}`;
      console.log(className);
      button1 = document.querySelector(className);
      console.log(button1);
      if (button1.style.display == "none") {
        button1.style.display = "block";
      } else {
        button1.style.display = "none";
      }

      return;
    }
  });
});
