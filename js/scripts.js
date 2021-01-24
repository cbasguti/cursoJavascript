let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(char){
    if(char === "r") return "Piedra";
    if(char === "s") return "Tijera";
    return "Papel";
}

function win(userChoice, comChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = convert(userChoice) + " le gana a " + convert(comChoice) + ".¡Tú ganas!";
    console.log("¡Tú ganas!");
}

function lose(userChoice, comChoice){
    comScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = convert(userChoice) + " pierde contra " + convert(comChoice) + ".¡Tú pierdes!";
    console.log("¡Tú pierdes!");
}

function draw(userChoice, comChoice){
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = convert(userChoice) + " empata con " + convert(comChoice) + ".¡Nadie gana!";
    console.log("¡Empate!");
}

function showComChoice(comChoice){
    let comChoice_div = document.createElement("div");
    let comChoice_img = document.createElement("img");
    comChoice_div.className = "comChoice";
    comChoice_div.id = "comChoice_img";
    document.getElementById("comDiv").appendChild(comChoice_div);
    switch(comChoice){
        case "r":
            comChoice_img.src = "src/com_Rock.png";
            comChoice_img.alt = "Rock.png";
            break;
        case "p":
            comChoice_img.src = "src/com_Paper.png";
            comChoice_img.alt = "Paper.png";
            break;
        case "s":
            comChoice_img.src = "src/com_Scissors.png";
            comChoice_img.alt = "Scissors.png";
            break;
    }
    document.getElementById("comChoice_img").appendChild(comChoice_img);
}

function game(userChoice){
    let comChoice_img = document.getElementById("comChoice_img");
    if(comChoice_img != null){
        comChoice_img.remove();
    }
    const comChoice = getComChoice();
    switch (userChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            showComChoice(comChoice);
            win(userChoice,comChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            showComChoice(comChoice);
            lose(userChoice,comChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            showComChoice(comChoice);
            draw(userChoice,comChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();

