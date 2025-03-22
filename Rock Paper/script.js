console.log('Hello World')

let getComputerChoice =()=>{
    a = Math.floor(Math.random()*3);
    if(a===0){
        return "Rock";
    }else if(a===1){
        return "Paper";
    
    }else{
        return "Scissor";
    }
}


let getHumanChoice = (num) =>{
    num = Number(num);
    if(num===0){
        return "Rock";
    }else if(num===1){
        return "Paper";
    
    }else{
        return "Scissor";
    }

}



let humanScore = 0;
let computerScore = 0;

let playRound = (ComputerChoice , HumanChoice)=>{
    if(ComputerChoice=== 'Rock' && HumanChoice === 'Scissor'){
        computerScore +=1;
        console.log('you lose! Rock beats Scissor', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)
    }else if(ComputerChoice==='Rock' && HumanChoice==='Paper'){
        humanScore +=1;
        console.log('you win! Paper beats Rock', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)

    }else if(ComputerChoice ==='Paper' && HumanChoice==='Scissor'){
        humanScore +=1;
        console.log('you win! Scissor beats Paper', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)
    }else if(ComputerChoice ==='Paper' && HumanChoice === 'Rock'){
        computerScore +=1;
        console.log('you lose! Paper beats Rock', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)
    }else if(ComputerChoice === 'Scissor' && HumanChoice === 'Rock'){
        humanScore +=1;
        console.log('you win! Rock beats Scissor', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)
    }else if(ComputerChoice === 'Scissor' && HumanChoice === 'Paper'){
        computerScore +=1;
        console.log('you lose! Scissor beats Paper', 'Computer Score: ', computerScore, ' Your Score: ', humanScore)
    }else{
        console.log(`Game tied! ${ComputerChoice} same as ${HumanChoice}`, 'Computer Score: ', computerScore, ' Your Score: ', humanScore);
    }
    

}



let playGame = ()=>{
    for(let round =1; round <=5; round++){
        let number = prompt('choose 0 for Rock, 1 for Paper, 2 for Scissor');
        let HumanChoice = getHumanChoice(number);

        let ComputerChoice = getComputerChoice();

        console.log("computer's Choice: ", ComputerChoice);
        console.log("your Choice ", HumanChoice);

        playRound(getComputerChoice(),getHumanChoice(number));


    }

    console.log("-----final Scores-----");
    console.log("Computer Score: ", computerScore);
    console.log("Your Score", humanScore);

    if(computerScore<humanScore){
        console.log('You won the game');
    }else if(computerScore>humanScore){
        console.log('You Lost the game');
    }else{
        console.log('Game is Tied');
    }
}


playGame();