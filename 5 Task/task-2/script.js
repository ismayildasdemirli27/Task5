const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const remaining = document.querySelector("#remaining");
const clearBtn = document.querySelector("#clearBtn");
const progressBar = document.querySelector("#progressBar");

const MAX_LIMIT = 100;

function updateCounter() {
    const currentLength = message.value.length;
    const remainingCount = MAX_LIMIT - currentLength;

    counter.textContent = `${currentLength} / ${MAX_LIMIT}`;

    remaining.textContent = `Remaining: ${remainingCount}`;

    if (progressBar) {
        progressBar.style.width = `${(currentLength / MAX_LIMIT) * 100}%`;
    }

    counter.classList.remove("warning", "danger");
    remaining.classList.remove("warning", "danger");
    if (progressBar) {
        progressBar.classList.remove("progress-warning", "progress-danger");
    }

    if (currentLength === MAX_LIMIT) {
        counter.classList.add("danger");
        remaining.classList.add("danger");
        if (progressBar) {
            progressBar.classList.add("progress-danger");
        }
    } else if (currentLength > 80) {
        counter.classList.add("warning");
        remaining.classList.add("warning");
        if (progressBar) {
            progressBar.classList.add("progress-warning");
        }
    }
}

message.addEventListener("input", updateCounter);

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        message.value = "";
        updateCounter();
        message.focus();
    });
}

updateCounter();
