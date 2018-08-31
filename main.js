var winner = document.getElementById("winner");
var playerChoiceElement = document.getElementById("playerChoice");
var playerWinCountElement = document.getElementById("playerWinCount");
var computerChoiceElement = document.getElementById("computerChoice");
var computerWinCountElement = document.getElementById("computerWinCount");
var playerWinCount = 0;
var computerWinCount = 0;

playerWinCountElement.textContent = playerWinCount;
computerWinCountElement.textContent = computerWinCount;

var choicesDict = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissors"
}

document.onkeyup = async function (event) {
    var gameKeys = Object.keys(choicesDict);
    var playerInput = event.key;

    if (gameKeys.indexOf(playerInput) > -1) {

        await startGame();
        var computerChoice = gameKeys[Math.floor(Math.random() * gameKeys.length)];

        if (playerInput === computerChoice) {
            winner.textContent = "It's a tie game!";
            setPlayerComputerElements(playerInput, computerChoice);
        } else {

            switch (playerInput) {
                case "r":
                    if (computerChoice == "p") {
                        computerWins(playerInput, computerChoice);
                    } else {
                        playerWins(playerInput, computerChoice);
                    }
                    break;
                case "p":
                    if (computerChoice == "s") {
                        computerWins(playerInput, computerChoice);
                    } else {
                        playerWins(playerInput, computerChoice);
                    }
                    break;
                case "s":
                    if (computerChoice == "r") {
                        computerWins(playerInput, computerChoice);
                    } else {
                        playerWins(playerInput, computerChoice);
                    }
                    break;
            }
        }
    }
};

function computerWins(playerKey, computerKey) {
    computerWinCount++;
    winner.textContent = "Computer Won :(";
    setPlayerComputerElements(playerKey, computerKey);
}

function playerWins(playerKey, computerKey) {
    playerWinCount++;
    winner.textContent = "You WON! :)";
    setPlayerComputerElements(playerKey, computerKey);
}

function setPlayerComputerElements(playerKey, computerKey) {
    playerChoiceElement.textContent = choicesDict[playerKey];
    playerWinCountElement.textContent = playerWinCount;
    computerChoiceElement.textContent = choicesDict[computerKey];
    computerWinCountElement.textContent = computerWinCount;
}

async function startGame() {
    winner.textContent = "ROCK!";
    await sleep(1000);
    winner.textContent = "PAPER!";
    await sleep(1000);
    winner.textContent = "SCISSORS!";
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}