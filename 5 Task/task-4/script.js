const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", (event) => {

        const currentBtn = event.currentTarget;
        const isAlreadyActive = currentBtn.classList.contains("active");

        questions.forEach((btn) => {
            btn.classList.remove("active");
            const icon = btn.querySelector("span");
            if (icon) {
                icon.textContent = "+";
            }
        });

        if (!isAlreadyActive) {
            currentBtn.classList.add("active");

            const icon = currentBtn.querySelector("span");
            if (icon) {
                icon.textContent = "−";
            }

            const answer = currentBtn.nextElementSibling;

        }
    });
});
