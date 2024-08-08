
// async function sayHello(name) {
    
//     setTimeout(() => {
//         console.log(`Hello ${name}`);
        
//     },2000,name)
// }

// sayHello('Dhruba')
// console.log('Testing1')
// console.log('Testing1')
// console.log('Testing1')
// console.log('Testing1')
// console.log('Testing1')


// async function fetchData() {
//     console.log('Start fetching');
  
//     // Pauses here, fetch returns a promise
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  // The execution of this function will be paused until a Promise is resolved/rejected but the execution of main thread will be continued
//     console.log(typeof response)
  
//     // Pauses here until the promise is resolved
//     const data = await response.json();
//     console.log('Data is processing')
  
//     console.log('Data fetched:', data);
// }
  
//   const data =fetchData();
//   console.log('Fetching in progress...');  //This statement will be executed as the fetch is called and execution of fetchData function is paused
//   n = 200
// //   while(n!=0){
// //     console.log('Please wait');   //The main thread will complete all the remaining tasks and then it focuses on the async function execution
// //     n--
// //   }

//  console.log(data)


 const promise1 = new Promise((resolve,reject) => {
    if(false){
        setTimeout(() => {
            resolve('Resolved')
        },3000)
    }
    else{
        setTimeout(() => {
            reject('Reject')
        },3000)
    }
 })

//  promise1.then( (resolve) => console.log(resolve),
//                 (reject) => {console.log(reject)})      //resolve and reject are handled by 'then' only

promise1.then((resolve) => {
    console.log('Hurrah',resolve)
})
.catch((reject) => {
    console.log('Sorry',reject)
})