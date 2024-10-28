const choises = document.querySelectorAll(".choise");
const showNumOfTimesUserWin = document.querySelector(".user-win");
const showNumOfTimesBotWin = document.querySelector(".bot-win");
const showWinner = document.querySelector(".show-winner");

let noOfTimesUserWin = 0;
let noOfTimesBotWin = 0;

const botChoiseGenerator = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};
choises.forEach((choise) => {
  choise.addEventListener("click", (e) => {
    const userChoise = choise.getAttribute("id");
    console.log("User : ", userChoise);
    const botChoise = botChoiseGenerator();
    console.log("Bot : ", botChoise);

    if (userChoise === botChoise) {
      showWinner.innerHTML = "It's a tie";
    } else {
      let userWin = true;
      if (userChoise === "rock") {
        if (botChoise === "paper") {
          userWin = false;
          showWinner.innerHTML = "Paper wraps Rock! Bot win!";
        } else {
          showWinner.innerHTML = "Rock smashes Scissors! You win!";
        }
      } else if (userChoise === "paper") {
        if (botChoise === "scissors") {
          userWin = false;
          showWinner.innerHTML = "Scissors cut through Paper! Bot win!";
        } else {
          showWinner.innerHTML = "Paper wraps Rock! You win!";
        }
      } else {
        if (botChoise === "rock") {
          userWin = false;
          showWinner.innerHTML = "Scissors cut through Paper! Bot win!";
        } else {
          showWinner.innerHTML = "Rock smashes Scissors! You win!";
        }
      }
      if (userWin === true) {
        noOfTimesUserWin += 1;
        showNumOfTimesUserWin.innerHTML = noOfTimesUserWin;
      }else {
        noOfTimesBotWin += 1;
        showNumOfTimesBotWin.innerHTML = noOfTimesBotWin;
      }
    }
  });
});
