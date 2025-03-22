// const myArray = ['I' , 'Love', 'Chocolate', 'Bar'];
// const myNewArray = myArray.join(" ");
// console.log(myNewArray);

// function hello(name = 'awais'){
//     console.log(`Hello ${name}!`);
// }

// hello();
// hello('Ari');

// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
//   }
  
//   textBox.addEventListener("keydown", logKey);

//  textBox.addEventListener("keydown", function(event){
//     console.log(`You pressed "${event.key}.`)
//  });

//  textBox.addEventListener("keydown" , (event)=>{
//     console.log(`you pressied "${event.key}`)
//  });

//  textBox.addEventListener("keydown" , event =>{
//     console.log(`you pressied "${event.key}`)
//  })


//  function showMessage(){
//    alert('Hello Everyone!');
//  }
// //  showMessage();
// //  showMessage();

//  let userName = 'John';

// //  function changeUser(){
// //    userName = 'bob'
// //    console.log(userName);
// //  }

// //  changeUser(); //this will print bob


//  function changeUser2(){
//    let userName = 'bob';
//    console.log(userName);
//  }

//  changeUser2();
//  console.log(userName); // this will print john as the function only changed inner userName
 
//  function showFromText(from, text){
//    console.log(from + ': ' + text)
//  }
//  showFromText('Ann', 'Hello');
//  showFromText('Ann', "What's up?");

//  function showFromText2(from, text){
//    from = '*' + from + '*';
//    console.log(from + ': ' + text);
//  }

//  let from = 'Ann';
//  showFromText2(from, "Hello");


//  function showCount(count){
//   console.log(count ?? "unknown");
//  }

//  showCount(0);
//  showCount(null);
//  showCount('abc');
//  showCount();


//  function checkAge(age){
//   if(age >= 18){
//     return true;
//   }
//   else{
//     // return confirm('do you have permission from your parents?');
//     return false;
//   }
//  }

// //  let age = prompt('How old are you?', 18);

//  if(checkAge(age) == true){
//   console.log('Access granted');
//  } else{
//   console.log('Access Denied');
//  }

//  let num1 = prompt('enter first number');
//  let num2 = prompt('enter second number');

//  function minMax(num1, num2){
//   if (num1 > num2){
//     console.log(num1, ' :is the bigger number');
//     return num1;
    
//   }
//   else if(num1 === num2){
//     console.log('numbers are equal');

//   }
//   else{
//     console.log(num2, ': is the bigger number');
//     return num2;
    
//   }
//  }

//  minMax(num1, num2);



// let num = prompt('enter number');
// let power = prompt('enter power of number');

// // function pow(num1, num2){
// //   return num**power;

// // }

// // console.log('Heres the answer: ', pow(num,power));

// function pow(num,power){
//   let result = num;

//   for (let i = 1; i < power; i++){
//     result *= num;
//   }
//   return result;
// }


// if (power < 1){
//   console.log(`Power ${power} is not supported, use positive integer`)
// }
// else{
//   console.log('your number is :', pow(num,power));
// }


// let userAge = prompt('hey whats your age bich? ', 18);

// let checkAge = (userAge < 18) ?
// () => console.log('your age is less than 18'):
// () => console.log('your age is greater than 18');

// checkAge(); 
// this expression will check 



// let name = prompt('write your name')

// let a = 'tenu';
// let b = 'menu';

// let bobs = (a, b) => {
//     let result = a + ' ' + b + ' are the best boobies';
//     return result; 
// };
// if(name === 'hira'){
//     console.log(bobs(a,b));

// } else{
//     console.log('Sorry only lub the big bobs titties!')
// }

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask('Do you Agree?', 
//     () => console.log('you agreed'),
//     () => console.log('you did not agree'));


// let add7 = (num) =>{
//     return Number(num) + 7;
// }

// let number = prompt('enter a number');

// console.log('heres your number ', add7(number));

// let multiply = (a,b)=>{
//     return Number(a) * Number(b);
// }

// let num1 = prompt('enter first number');
// let num2 = prompt('enter second number');

// console.log("heres the product of two numbers", multiply(num1,num2));


// let capitalize = (a) => {
//     // The initial check is redundant because the input validation is already handled later.
//     return a[0].toUpperCase() + a.slice(1).toLowerCase();
// }

// let text = prompt('Enter A word');

// if (text && isNaN(text)) {
//     console.log("Here's the first letter capitalized:", capitalize(text));
// } else {
//     console.log("No valid input provided.");
// }


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

// let lastLetter = (a)=>{
//     return a.slice(-1);
// }

// let word = prompt('enter a word');

// if(word && isNaN(word)){
//     console.log('heres the last letter', lastLetter(word));

// } else{
//     console.log('enter a word not a number');

// }


