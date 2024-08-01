const userName = {
    email : "dhruba@gmail.com",
    name : "Dhruba",
    isLoggedIn : true
}


// const {name} = userName  //Object destructuring
// const {name : username} = userName  
// console.log(username);


const {mail} = userName  // mail is not present in userName object
console.log(mail);       // undefined
