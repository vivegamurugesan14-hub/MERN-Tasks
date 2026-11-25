const statusBanner = document.getElementById("statusBanner");
const checkButton = document.getElementById("checkButton");

// Welcome message when page loads

    alert("Welcome to the System Status Checker!")

// Arrow function to update banner
const updateBanner = (message, color) => {
    statusBanner.textContent = message;
    statusBanner.style.backgroundColor = color;
};

// Promise to simulate system checking
const checkSystemStatus = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(false);
        }, 2000);

    });
};

// Button click
checkButton.addEventListener("click", () => {

    updateBanner("System is Checking...", "orange");

    checkSystemStatus().then((status) => {

        if (status) {
            updateBanner("System is Online", "green");
        } else {
            updateBanner("System is Offline", "red");
        }

    });

});