function getComputerInput() {
    const vals = ["stone", "paper", "scissors"];
    const randomValue = Math.floor(Math.random() * 3);
    return vals[randomValue];
}

function getUserInput() {
    const buttons = document.querySelectorAll(".choiceButton");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const userChoice = e.target.textContent.toLowerCase();
            const computerChoice = getComputerInput(); // Get computer's move
            playGame(userChoice, computerChoice); // Play the game
        });
    });
}

const backButton=document.querySelector(".back");

backButton.addEventListener('click',()=>{
    window.location.href="index.html";
})

function playGame(userInput, computerInput) {
    const resultBox = document.querySelector(".result"); // Use querySelector for a single element

    if (!resultBox) return; // Safety check

    if (userInput === computerInput) {
        resultBox.classList.remove("hidden");
        resultBox.textContent = "Draw!";
    } else if (
        (userInput === "stone" && computerInput === "paper") || 
        (userInput === "paper" && computerInput === "scissors") || 
        (userInput === "scissors" && computerInput === "stone")
    ) {
        resultBox.classList.remove("hidden");
        resultBox.textContent = `Computer chose ${computerInput}. Computer wins!`;
    } else {
        resultBox.classList.remove("hidden");
        resultBox.textContent = `Computer chose ${computerInput}. You win!`;
    }
}

// Initialize the event listeners
getUserInput();







