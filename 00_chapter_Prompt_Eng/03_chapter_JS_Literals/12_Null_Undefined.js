// ================== 
// null vs undefined
// ==================

/*
undefined - a variable exists, but has not been assigned a value yet. 
javascript itself sets this automatically.

null - a variable exists, but has been explicitly set to have no value or empty value.
it is intentional absence of any value
*/

// var x; // variable x is declared but not assigned a value, so it is undefined
// console.log(x); // undefined

// var audi = null; // variable audi is declared and assigned a value of null
// console.log(audi); // null   


// 1.undefined
let userName; // variable userName is declared but not assigned a value, so it is undefined
 console.log(userName); // undefined
console.log(typeof userName); // undefined

function greet() {
    // no return statement 
}
 console.log(greet()); // Hello undefined


 
 let x;
 x = 10;
 console.log(x);


// =======================
// 2. null
// =======================

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // object



/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/


