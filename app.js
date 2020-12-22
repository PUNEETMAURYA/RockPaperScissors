var userScroe = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function Compchoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return (choice[randomNumber]);

}
Compchoice();

function changeToResult(letter) {
    if (letter == "p") return "Paper";
    if (letter == "s") return "Scissors";
    if (letter == "r") return "Rock";
}

function win(computerChoice, Userchoice) {
    userScroe++;
    userScore_span.innerHTML = userScroe;
    const smalluserword = "user".fontsize("3").sub();
    const smallcompword = "comp".fontsize("3").sub();
    result_div.innerHTML = changeToResult(Userchoice) + smalluserword + " beats " + changeToResult(computerChoice) + smallcompword + "    . User wins 😎😎";

}

function lose(computerChoice, Userchoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const smalluserword = "user".fontsize("3").sub();
    const smallcompword = "comp".fontsize("3").sub();
    result_div.innerHTML = changeToResult(computerChoice) + smallcompword + " beats " + changeToResult(Userchoice) + smalluserword + "  .    Computer wins 😝😝";
}

function tie(computerChoice) {
    const smalluserword = "user".fontsize("3").sub();
    const smallcompword = "comp".fontsize("3").sub();
    result_div.innerHTML = " Its a tie  between " + changeToResult(computerChoice) + smallcompword + " and " + changeToResult(Userchoice) + smalluserword;
}

function game(Userchoice) {
    const computerChoice = Compchoice();
    const result = computerChoice + Userchoice;
    switch (result) {
        case "rp":
        case "ps":
        case "sr":
            win(computerChoice, Userchoice);
            break;
        case "pr":
        case "rs":
        case "sp":
            lose(computerChoice, Userchoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            tie(computerChoice);
            break;

    }
}

main();

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}