//JAVASCRIPT BASICS

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




// CONTROL FLOW BASICS

// for loops

 for(let i = 0; i < 5; i++) {
    console.log('in loop: ', i);
 };
 console.log('loop finished');

 const names = ['eren', 'mikasa', 'armin'];
// if you dont know how many elements there is in the array, use 'abc.length'.
for(let i=0; i < names.length; i++) { 
    //console.log(names[i]);
     let html = `<div>${names[i]}</div>`;
     console.log(html);
};
 
//while loops 

const namae = ['mario', 'luigi', 'frog'];
let i = 0;

while(i < namae.length) {
    console.log(namae[i]);
    i++;
};

//do while loops
let j = 3;

do {
    console.log('val of j is: ', j);
    j++;
} while(j < 5);



// if, else if, else statements + logical operators or ||, and &&

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log("Thats a long a** password, proud of you son!!!");
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log("good enough password, barely made it...");
} else {
    console.log("Fam..the password's hella mid, are you not embarrrassed?!");
}

// logical NOT (!)

let user = false;

if(!user) { //without the '!' the if statement doesnt display anythin on console, because the user = true.
    console.log("you must log in to continue");
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 0){
        continue; //this will take out element "0" on the console and continue with the loop. 
    }

    console.log("your score: ", scores[i]);

    if(scores[i] === 100){
        console.log("You got the mf HIGHEST score dawggg, AYEEEEE");
        break;
    }
};

// switch statements 

const grade = 'A';

switch(grade) {
    case 'A':
        console.log("You got an A,damnnnn!");
        break;
    case 'B':
        console.log("grade B, das wassup");
        break;
    case 'C':
        console.log("grade C sheeeesh");
        break;
    case 'D':
        console.log("grade D, is aight");
        break;
    case 'E':
        console.log("grade E, mid..");
        break;
    default:
        console.log("not a grade????");
};


// variables and block scope

let anos = 30;

if(true) {
    let anos = 40;
    let jeSuis = 'Mario';
    console.log("inside the 1st code block: ", anos, jeSuis);

    if(true) {
        let anos = 50;
        console.log("inside the 2nd code block: ", anos);
    }
}

console.log("outside the code block: ", anos);




// FUNCTIONS & METHODS 

// Remeber with a function expression you have to declare it first before running the function BUT with function declaration you can put it anywhere on your code, it doesnt matter. its called "hoisting".
// function expression
const speak = function() {
    console.log('ITS LITTT');    
};

speak();
speak();
speak();

greet();
greet();
greet();

// function declaration
function greet() {
    console.log('YUUUUUURRR');
}


//arguments & parameters 
const day = function(name='luigi', time='moonlight'){  //defining the parameters in the function gives it a default value.
    console.log(`good ${time} ${name}`)
};

day();
day('mario');
day('princess', 'twilight');


//returning values, "return" in a function allows us to use that value outisde of the function. i.e:
//fyi, this is a regular function:
const calcArea = function(radius) {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);


//arrow function
//if you only have on parameter in the fucntion you dont need the parenthesis around it. 

const calcArea1 = radius => 3.14 * radius**2;

const area1 = calcArea1(6);
console.log('area is ', area1);

// Practise arrow functions

// const greet = function(){
//    return 'hello world';
// };
const greetings = () => 'hello world';

const ready = greetings();
console.log(ready);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

//this arrrow functions is pretty similiar to the regular function above BECAUSE there is more statements running in this code hence why it couldnt be shortened further.
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));

//Functions vs Methods, the difference is how we call them and where they are defined...

const nameOne = 'luigi';
// functions
const greetOne = () => 'Ho HO HO HO MERry Christmas';

let resultOne = greetOne();
console.log(resultOne);

// methods
let resultTwo = nameOne.toUpperCase();
console.log(resultTwo);
// methods are functions BUT they are functions which are associated with an object or data type


//callbacks & forEach
const myFunc = callBackFunc => {
    //do something
    let value = 50;
    callBackFunc(value);
};
// here we are calling back a function in a function:
myFunc(value => {
    // do something
    console.log(value);
});

let plural = ['her', 'him', 'they', 'them', 'us'];

const logSingular = (singular, index) => {
    console.log(`${index} - ELLO ${singular}`)
};

// plural.forEach((singular, index) => {
//     console.log(index, singular);
// });

//write the above with less code:
plural.forEach(logSingular);


// callback functions in action
const ul = document.querySelector('.people');

let pluralOne = ['her', 'him', 'they', 'them', 'us'];

let htmlOne = ``;

pluralOne.forEach(singular => {
    //create html template
    htmlOne += `<li style="color: orange">${singular}</li>`;
});

console.log(htmlOne);
ul.innerHTML = htmlOne;



// OBJECT LITERALS 

let userOne = {
    name: 'Miri',
    age: 80,
    email: 'lalaland@gmail.com',
    location: 'Peru',
    //objects in arrays:
    blogs: [
        {title: 'Live laugh Death', likes: 40},
        {title: 'Yo mama so big..', likes: 75} 
    ],
    login(){                                  //this is a function that is definied in an object AKA A METHOD!
        console.log('user is logged in');
    },
    logout(){                      //functions in a object has to be regular functions BUT you can use a shorthand ex
        console.log('user went home..');
    },
    logBlogs(){
        console.log('dis user has written all of these blogs, mad corny: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(userOne);
console.log(userOne.name);

userOne.age = 77;
console.log(userOne.age);

console.log(userOne['email']);
userOne['location'] = 'Madagascar';
console.log(userOne['location']);

console.log(typeof userOne);

// adding methods
userOne.login();
userOne.logout();

const namee = 'mario';
namee.toUpperCase(); //this toUppeCase method is a function definied in a string object built in to JavaScript!

//Remember a regular function isnt definied in a object but a METHOD is, voila thats the differencé~!

// 'this' keyword
userOne.logBlogs();
console.log(this); //if this is used like this it will show the window smth on the console..
// cant use 'this' in a arrow function, it has to be a regular function in (an object)..

// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const arean = 4.5;

console.log(Math.round(arean)); //rounds the number
console.log(Math.floor(arean)); // rounds the number to the "floor", aka rounds it down
console.log(Math.ceil(arean));  // rounds the number to the "ceil", aka rounds it up
console.log(Math.trunc(arean));  // deletes the decimal

const random = Math.random(); //math.random method only gives your random numbers between 0 and 1.

console.log(random);
console.log(Math.round(random*100)); //multiplying it with a hundred to get a random number between 0-100.


//PRIMITIVE & REFERENCE TYPES

//Primitive types: number, strings, Booleans, null, undefined, symbols

//Reference types: all types of objects, object literals, arrays, functions, dates, all other objects

// primitive values 
 let scoreOne = 50;
 let scoreTwo = scoreOne;

 console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

 scoreOne = 100;

 console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
 // the scoreOne is 100 but the scoreTwo is still 50, because when we make a copy (like above) in primitive values-
 // -changing one of them doesnt affect the other!!!

 // reference values
 const userThree = { name: 'lily', age: 90}; // we get a pointer locked to this variable
 const userFour = userThree; //in refence values like this, it doesnt copy the object it only copies the pointer!!

 console.log(userThree, userFour);

 userThree.name = 'Brian';
 console.log(userThree, userFour); //userFour also changes to Brian as it copies userThree and not the object.





