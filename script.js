//shorthand notation

 let apples = 10;

 apples++; // adds  +1 
 apples--; // subs -1

 apples += 10; // adds 10 
 apples -= 5; // subs 5 
 apples *= 2; // mult 2
 apples /= 2; // divides by 2

console.log(apples);



//Template string way

 const title = 'Best reads of 2022';
 const author = 'Mrio';
 const likes = '20';

 let result = `The blog called ${title} by ${author} has ${likes} likes`;
 console.log(result);



// Creating html templates 

 let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
 `;
 console.log(html);



// Array methods 
 let ninjas = ['shaun', 'parker', 'ryan'];

 let result0 = ninjas.concat(['ken', 'crystal']); // concat means joining things together
 console.log(result0);

// this push method alters the original value.
 let result01 = ninjas.push('ken'); // adds another value to the original array and gives us back length(number or elements) in console.

 let result02 = ninjas.pop(); // pop method erase the last element in the array. in this example the element it erased will be shown on the display.


// Methods can return booleans 
 let email = 'luigi@gmail.com';

// includes method will return true or false on console.
 let resultEmail = email.includes('@'); // this will return true, because there is an '@' in the email variable.
 console.log(resultEmail);



// Comparison operators
 let age1 = 25;

 console.log(age1 == 30); // this ask if age equals to 30 and returns false.
 console.log(age1 == 25); // ask if age equals to 25 and returns true. 
 console.log(age1 != 30); // ask if age does not equal to 30 and returns true. 


// Loose vs Strict Comparisons
// Loose comparison (different types can still be equal)

 let age = 25; 

 console.log(age == 25); // returns true. asks if age is equal to 25.
 console.log(age == '25'); // returns true. it will read the string as a number and evaluate it as true.
 console.log(age != 25); // returns false. asks if age is not equal to 25.
 console.log(age != '25'); // returns false. it will read string as a number and evaluate it as false.

// Strict Comparison (different types cannot be equal);
 console.log(age === 25); // returns true.
 console.log(age === '25'); // returns false.
 console.log(age !== 25); // returns false.
 console.log(age !== '25'); // returns true.


// Type Conversion
 let score = '100';
 score = Number(score); // converts the string to a number
 console.log(score + 1); // adds 1 to the variable
 console.log(typeof score); // displays what data type.

 let result1 = Number('hello'); // converts the string to a number, console show NaN, not a number
 let result2 = String(50); // converts number to string
 let result3 = Boolean(0); // returns false. 
 let result4 = Boolean(' '); // returns true. because this asks if its a string

 console.log(result1, typeof result1, result2, result3, result4);

