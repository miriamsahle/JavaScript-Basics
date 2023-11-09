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




// THE DOCUMENT OBJECT MODEL

// the query selector: to query the dom and get a single element

const para = document.querySelector('p'); // this will refer to the first p tag in the html.
const errot = document.querySelector('.error'); // this will refer to a tag with the class'error'.
const errror = document.querySelector('div.error'); // this specifically refers to a div tag with a class named 'error'.

console.log(para);
console.log(errot);
console.log(errror);

// the query selector All : to get all the elements

const paras = document.querySelectorAll('p'); //this gets all the p tags in one node list.
const erroror = document.querySelectorAll('.error'); //gives us all the error class

paras.forEach(para => {
    console.log(para);
})

console.log(erroror);
console.log(paras);
console.log(paras[2]); //this gives us the third element in the node list

// get an element by ID 
const titel = document.getElementById('page-title');

console.log(titel);

// get an element by their class name 
const ermm = document.getElementsByClassName('error');

console.log(ermm[0]);
console.log(ermm); // we see an HTML Collection on the console instead of a node list. they are similiar BUT!!! you cant use forEach method..
// this under will not work:
// ermm.forEach(erm => {
//    console.log(erm);
// })

// get an element by their tag name 
const pepee = document.getElementsByTagName('p');
console.log(pepee);
console.log(pepee[0]);

const paragraph = document.querySelector('p');
// console.log(paragraph.innerText); // this gives us the inner text of that elelemetn
paragraph.innerText += ' is f***kin LIIITYYY'; //if you want it to append (add), use '+=' 

const paraOne = document.querySelectorAll('p');

paraOne.forEach(para => {
    console.log(para);
    para.innerText += ' new texttt';
})

const content = document.querySelector('.content');

// console.log(content.innerHTML);
 content.innerHTML = '<h2>This is the newest most coolest repleacemnetatat eveooor :)</h2>'; //doing this it overwrites the content before.

const manniskor = ['lily', 'oli', 'minny'];

manniskor.forEach(man => {
    content.innerHTML += ` ${man}`;
});

const link = document.querySelector('a');
//if we want to get the attribute(in dis case the href):
console.log(link.getAttribute('href'));
//if we want to change an attribute:
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'My new website hehehh';

const mssg = document.querySelector('h1');

console.log(mssg.getAttribute('id'));
mssg.setAttribute('id', 'success'); //this changed the id name to successs
mssg.setAttribute('style', 'color: pink'); //this change the font color to pink

//instead of using setAttribute
const mssgOne = document.querySelector('h1');

mssgOne.style.color = 'crimson';
mssgOne.style.margin = '50px';
mssgOne.style.fontSize = '100px';

console.log(mssgOne.style); // this will help you see which style declarations there are...

// Adding and removing classes
const nike = document.querySelector('p');

console.log(nike.classList);
nike.classList.add('nike'); //if a tag doesnt have a class you can add one like dis
nike.classList.remove('nike'); //removing the class


const allOfEm = document.querySelectorAll('p');

allOfEm.forEach(numbaError => {
    if(numbaError.textContent.includes('error')){
        numbaError.classList.add('nike');
    } else if (numbaError.textContent.includes('success')){
        numbaError.classList.add('success');
    } 
});

// 'classList.toggle' is also a method to add or remove a class.

// Parent & children

const article = document.querySelector('article');
//'.children' will show the children in the article tag, which means all the tags inside the article tag.
console.log(article.children);
// but it is shown as an HTMLCollection which we can't use forEach on. We need to convert it to an array.
console.log(Array.from(article.children)); //now the its an array.
//now we can add a class to each element in the array
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

//if you want to find the parent element to a child:
const ayee = document.querySelector('h2');
console.log(ayee.parentElement); // this shows the article tag in the console
// we can go further
console.log(ayee.parentElement.parentElement); // this shows the <body></body> in hte console.
// we can also see the sibling
console.log(ayee.nextElementSibling);
// we can als see the previous element 
console.log(ayee.previousElementSibling);
// there's also chaining
console.log(ayee.nextElementSibling.parentElement.children); //this shows the article tag and all the tags within it.


//addEventListener, event bubbling and event delegation
const uli = document.querySelector('ul');
//ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'someting new to do';
    // uli.append(li); //appends it to the html, but it places it at the bottom
    uli.prepend(li); //appends but it places it to the top.
});

//This targets one single li tag to act the way we want it to
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         //console.log('item clicked');
//         // console.log(event);
//         // console.log(event.target); //shows the full tag on console when clicked on
//         // console.log(item);
//         event.target.style.textDecoration = 'line-through'; //when the li tag is clicked on a line will cross it out.
//         event.stopPropagation(); //this will make sure nothing unnecessary will happpen after a screen reader clicks on the event.
//         event.target.remove(); // removes the tag when clicked on
//     });
// });

//Now we target the ul tag, that way we will reach all tags inside plus allt the new ones that comes after we click on the button!! cleaner coding:
uli.addEventListener('click', event => {
    // console.log(event);
    if(event.target.tagName === 'LI') {
        event.target.remove();
    }
});

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('GET YOUR HANDS OF MY COPYRIGHTED CONTENT');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

//wheel event, lol
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});
