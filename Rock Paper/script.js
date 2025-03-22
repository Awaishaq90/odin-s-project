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

console.log(getComputerChoice());

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

let number = prompt('choose 0 for Rock, 1 for Paper, 2 for Scissor');


// let a = Math.floor(Math.random()*3);


console.log(getHumanChoice(number));

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

playRound(getComputerChoice(),getHumanChoice(number));