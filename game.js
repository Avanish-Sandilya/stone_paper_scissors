function getComputerInput(){
    const vals = ["stone","paper","scissors"];
    const randomValue = Math.floor(Math.random() * 3);
    return vals[randomValue];

}

function getHumanValue(){
    let val = prompt("Enter stone, paper or scissors");
    const finalValue= val.toLowerCase();
    return finalValue
}

function playGame(userInput,computerInput){
    if(userInput===computerInput){
        console.log("Draw")
    }else if((userInput==="stone" && computerInput==="paper") || (userInput==="paper" && computerInput==="scissors")||(userInput==="scissors" && computerInput==="stone")){
        console.log(`Computer input was ${computerInput}. Computer wins`);
    }else{
        console.log(`Computer input was ${computerInput}. You win`);
    }
}

let gameOn = true;

while(gameOn){
    let choice = prompt("Want to play? enter y or n");
    if(choice==="y"){
        playGame(getHumanValue(),getComputerInput());
    }else{
        gameOn=false;
        console.log("bye");
    }
}


