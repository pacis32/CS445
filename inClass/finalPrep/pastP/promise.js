// setTimeout(() => console.log('setTimeout results'), 0);
//  console.log('Code starts');
// new Promise((resolve) => {
// console.log('Promise starts');
// resolve(`Promise results`); })
// .then(console.log);
//  console.log('Code ends');

 /*When we use querySelectorAll(), it returns a collection of DOM elements. if we
changes in DOM do not update the collection since querySelectorAll() is a static
collection but we can see the corresponding DOM change in the browser. Answer Key:True/**
 
 */

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 resolved');
//     }, 1000);
// })
// const p2 = data => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${data}, p2 resolved`, 1000));
// });

// p1.then(data => p2(data)).then(result =>
//     console.log(result));

    
    async function f() {
        let result = 'first!';
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000); });
        result = await promise;
        console.log(result); }
        f();
        //// key answer: done!

        /*The global history object consists of an array of __urls_____ .
• A. JavaScript history objects •
 B. URLs
• C. DOM Objects
• D. None of the above
Answer Key:B*/