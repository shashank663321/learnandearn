function startLearning() {
    alert("Your learning journey starts now!");
}

function joinLiveClass() {
    alert("Live class will start soon.");
}

function startGame() {
    alert("Loading game...");
}

function openAdminPanel() {
    let password = prompt("Enter Admin Password:");
    if (password === "admin123") {
        alert("Access Granted");
        window.location.href = "admin.html";
    } else {
        alert("Access Denied!");
    }
}