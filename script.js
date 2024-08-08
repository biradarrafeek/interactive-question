document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("questionsAnswered") === "true") {
        showTitleScreen();
    } else {
        localStorage.removeItem("answer-1");
        localStorage.removeItem("answer-2");
        localStorage.removeItem("answer-3");
    }
});

function nextQuestion(questionNumber) {
    const answer = document.getElementById(`answer-${questionNumber}`).value;
    if (answer.trim() === "") {
        alert("Please provide an answer.");
        return;
    }
    localStorage.setItem(`answer-${questionNumber}`, answer);

    if (questionNumber < 3) {
        document.getElementById(`question-${questionNumber}`).style.display = "none";
        document.getElementById(`question-${questionNumber + 1}`).style.display = "block";
    } else {
        localStorage.setItem("questionsAnswered", "true");
        showTitleScreen();
    }
}

function showTitleScreen() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("title-screen").style.display = "block";
}
