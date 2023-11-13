// Filter method
const scores = [10, 70, 15, 25, 60, 40, 50];

// This method filters out the array in this function, in a true or false manner, it will return the elements that are true in a new array.
// const filteredScores = scores.filter(score => { 
//     return score > 20; //returns elements in the array that are bigger than 20.
// });

// console.log(filteredScores); 

const users = [
    {name: 'mario', premium: true},
    {name: 'luigi', premium: false},
    {name: 'yoshi', premium: false},
    {name: 'princess', premium: true}
];


 const premiumUsers = users.filter(user => {
    return user.premium;
 }); 

console.log(premiumUsers);


// Map method. i.e if you have an array and want to update each element in the array, you can use the map method to iterate the array, which updates each element with a new value and stores it in a new array, thru a callback function.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map((product) => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2}; //writing the function like this just edits the array and gives it a new value, it doesnt mess with the original value of the array, because we're creating a new object.
    } else {
        return product;
    }
});
console.log(saleProducts);

//Reduce method. Iterates an array thru a callback function, but it doesnt return an array with an updated value. it returns the value based on what you want. 

// how many scores are over 50?
const result = scores.reduce((acc, curr) => { //acc = accumulator, curr = current.
    if(curr > 50) {
        acc++;
    }
    return acc;
}, 0); //acc starts at 0 and adds +1 thru every iteration.
console.log(result); //

const scorés = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

const marioTotal = scorés.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    } 
    return acc;
},0 );

console.log(marioTotal);



// Find method. it returns the first value in the array that passes the condition(in a callback function).
const firstHighScore = scores.find((score) => {
    return score > 50;
});
console.log(firstHighScore);


// Sort method
// example 1 - sorting strings
const names = ['mario', 'luigi', 'yoshi', 'crystal', 'shaun'];

//this array method is destructive because it changes the original array
names.sort(); // returns it in alphabetic order.
names.reverse(); //reverses the order.
console.log(names);

//example 2 - sorting numbers 
// scores.sort(); //be aware it only looks at the first number.
// scores.reverse();
scores.sort((a,b) => b - a);
console.log(scores);

//example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'yoshi', score: 10},
    {name: 'luigi', score: 50},
    {name: 'crystal', score: 30},
    {name: 'shaun', score: 70}
];

//when sorting multiple objects in an array you need to call the method in a function, i.e:
players.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if(b.score > a.score){
        return 1;
    } else {
        return 0;
    }
});

//the above code written in a much simpler way:
players.sort((a,b) => b.score - a.score);
console.log(players);

// Chaining Array methods

//using the products array from above, we will use filter method and return an array with objects that are bigger than 20..
const filtered = products.filter((product) => {
    return product.price > 20;
});
// we get an updated string array with a new price using the map method:
// const promos = filtered.map((product) => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });



// now doing it as a chain.
// also less code and looks cleaner than the same code above.
const promos = products 
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

    console.log(promos);