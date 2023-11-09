const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); //as it sounds it prevents the window from doing its default action, which in this situation was to refresh.
    //console.log(username.value); // gives us the value of the username on console when clicked on submit.
    //console.log(form.username.value); // less code, ang gives us the value of the username.
    //Validation
    const username = form.username.value;
    

    if(usernamePattern.test(username)){
        //goodfeeback
        feedback.textContent = 'username maaad valid';
    } else {
        //badfeedback
        feedback.textContent = 'username heeella bad,try again :|';
    }
});

//testing RegEx
const username = 'marion';
const pattern = /^[a-z]{6,}$/; // this is our pattern we set that the username has to follow. letters a-z and at least 6letters or more.

// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log('regex test passed :) hehhe');
// } else {
//     console.log('regex test failed :( nonono');
// }

// let result = username.search(pattern); //this returns an INTEGER. this shows the position of where the pattern matches in the username.
// console.log(result);

// Live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value); //both will show the value of the username..
    if(usernamePattern.test(e.target.value)){
        // console.log('passed');
        form.username.setAttribute('class', 'success');
    } else {
        // console.log('fail');
        form.username.setAttribute('class', 'error');
    }
})
