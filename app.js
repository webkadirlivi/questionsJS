const openBtn = document.querySelectorAll(".question-btn");

//traversing the DOM
openBtn.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    const parentQuestion = e.currentTarget.parentElement.parentElement;
    parentQuestion.classList.toggle("show-question-bottom");
  });
});
