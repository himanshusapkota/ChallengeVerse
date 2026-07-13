let challenges = [
    "Build a simple calculator.",
    "Read 10 pages of a book.",
    "Do 20 push-ups.",
    "Drink 2 glasses of water.",
    "Learn 5 new English words.",
    "Walk for 15 minutes.",
    "Write a short diary entry.",
    "Solve one coding problem.",
    "Draw your dream house.",
    "Touch Some Grass"
];

let title = document.getElementById("challengeTitle");
let text = document.getElementById("challengeText");
let button = document.getElementById("challengeBtn");

function newChallenge() {
    let random = Math.floor(Math.random() * challenges.length);

    if (title && text) {
        title.innerHTML = "Your Challenge";
        text.innerHTML = challenges[random];
    }
}

if (button) {
    button.addEventListener("click", newChallenge);
    setInterval(newChallenge, 10000);
}

let search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        let value = search.value.toLowerCase();
        let items = document.querySelectorAll(".challenge");

        items.forEach(function (item) {
            if (item.innerHTML.toLowerCase().includes(value)) {
                item.style.display = "list-item";
            } else {
                item.style.display = "none";
            }
        });
    });
}

let form = document.getElementById("challengeForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let category = document.getElementById("category").value;
        let challenge = document.getElementById("challenge").value.trim();
        let message = document.getElementById("message");

        if (name === "" || category === "" || challenge === "") {
            message.style.color = "red";
            message.innerHTML = "Please fill in all fields.";
        } else {
            message.style.color = "green";
            message.innerHTML = "🎉 Thank you! Your challenge has been submitted.";
            form.reset();
        }
    });
}