// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for(const cat of cats){
//     console.log(cat);
// } //loops through the array (for of loop)

// function toUpper(string){
//     return string.toUpperCase();
// }

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

// function lCat(cat){
//     return cat.startsWith("L");

// }

// const filtered = cats.filter(lCat);

// console.log(filtered);

// let myFavCats = 'My Favourite cats are called ';

// for(const cat of cats){
//     myFavCats += ` ${cat}`;
// }

// console.log(myFavCats);

// for(let i = 0; i<cats.length; i++){
//     if(i === cats.length -1){
//         myFavCats += ` and ${cats[i]}.`;
//     }else{
//         myFavCats += ` ${cats[i]}`;
//     }
// }

// console.log(myFavCats);



// for(let i = 0; i<11; i++){
//     console.log(i);
// }

// let i = 0;

// // while(i<11){
// //     console.log(i);

// //     i++;
// // }

// do{
//     console.log(i);
//     i++;
// }while(i<10)


// outer: for(let i =0; i <3; i++){
//     for(let j = 0; j<3; j++){
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// alert('Done!');

// for(let i = 2; i <11; i++){
//     if(i % 2 ===0){
//         console.log(i);
//     }else{
//         continue;
//     }
// }
// let i =0;

// while(i<3){
//     alert(`number ${i}!` );
//     i++;

// }

// let i = 0;

// do{
//     let num = prompt("enter a number greater than 100");
//     if(num > 100){
//         alert(`thank you entered ${num}`);
//         break;
//     }else{
//         continue;
//     }
// }while(i<100);

//alternate method

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);
// let n =  prompt('Enter a number');

// let num = Number(n)+1;


// nextPrime:
// for(let i = 2; i<= num; i++){
//     for(j=2; j<i; j++){
//         if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
// }