let faqBtns = document.querySelectorAll(".faq-item .signup-btn");

console.log(faqBtns);

for (let index = 0; index < faqBtns.length; index++) {
  faqBtns[index].addEventListener("click", (data) => {
    data.preventDefault();

    let btnParent = data.target.parentElement;

    btnParent.parentElement.classList.toggle("active");

    if (data.target.innerText.includes("Vis mere")) {
      data.target.innerText = "Vis mindre";
    } else {
      data.target.innerText = "Vis mere";
    }
  });
}
