function sayHello() {
    console.log("Hello");
}

// sayHello       //function reference
// sayHello()     //function execution


//IIFE : Immediately Invoked Function Expression

// (function sayHello() {
//     console.log("Hello");
// })()




((name) => {
    console.log(`What's up ${name}`)
    console.log(`Hope you are doing great`)
})('Dhruba')