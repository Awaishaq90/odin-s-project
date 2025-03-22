let a = 1
let b = 2

let c = ++a; //2
let d = b++; //2

console.log( c, d)

/*"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false //1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // 2px wrong, correct NAN
"  -9  " + 5 // -9 5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // 1 wrong, correct NAN
" \t \n" - 2 */ // -2


let e = +prompt("first number?", 1);
let f = +prompt("Second number", 2);
console.log(e + f);