const colorBox = document.querySelector("#colorBox");

const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");
const resetBtn = document.querySelector("#resetBtn");

redBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "#ef4444";
    colorBox.textContent = "Red";
});

greenBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "#10b981";
    colorBox.textContent = "Green";
});

blueBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "#3b82f6";
    colorBox.textContent = "Blue";
});

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = "#94a3b8";
        colorBox.textContent = "Gray";
    });
}
