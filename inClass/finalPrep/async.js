

// function makeRequest(location){
//     new Promise((resolve, reject)=>{
//         console.log(`makingRequest to ${location}`)
//         if(location==='Google'){
//             resolve('Hi from Google');
//         }else{
//              reject ('we can only talk to google')
//         }
//     })





   
// }
// function processRequest(response){
//     return new Promise((resolve,reject)=>{
//         console.log('Processing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }

// makeRequest('google').then(response =>{
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResponse =>{
//     console.log(processResponse)
// }).catch(err=>{
//     console.log(err)
// })

// async function doWork(){
//     try{
//         const response= await makeRequest('Google')
//         console.log('Response Received')
//         const processResponse= await processRequest(response)
//         console.log(processResponse)
//     }
//     catch(error){
//         console.log(err)
//     }
// }

// doWork()

// reverse using async/await 
//  function reverseHelp(arr){
//     arr=arr.split('');
//     return arr.reverse().join('')
// }

// String.prototype.reverse = async function(){
//  let res = await reverseHelp(this);
//  console.log(res)
// }

// console.log('start');
// "hello".reverse(); 
//  console.log('end');


 // using promise
// String.prototype.reverse=function(){
//     let arr  =arr.split('');
//     console.log(arr.reverse().join(''))
// }
//  function reverseHelp(arr){
//     arr=arr.split('')
//     return arr.reverse().join('');
//  }
 
//  String.prototype.reverse= function(){
//     new Promise((resove,reject)=>{
//             let arr=arr.split('');
//             resove(arr.reverse().join(''))
//     }).then(console.log)
//  }


 
//  console.log('start');
// "hello".reverse(); 
//  console.log('end');

 //question 6

//  function getLengthAfter(str,num){
//    return new Promise((resolve,reject)=>{
       
//         setTimeout(()=>{resolve(str.length)},num);
//     })
//  }
// getLengthAfter('hello',3000).then(console.log)

// console.log('start');
// const result=new Promise((reject,resolve)=>{
//     console.log(1);
//     setTimeout(()=>reject('Whoops!'),1000);
//     console.log(2)
// }).then(res=>res)
//    .then('Error happens')

//    console.log(result);
//    console.log('end');
   /**output 
    * start
    * 1
    * 2
    * Promise{}
    * end
    */

//    console.log('start');
//    async function f(){
//     return await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return 'done!'
//         },1000);
//     })
//    }
//    async function bar(){
//     console.log(await f());
//    }
//    f();
//    console.log('end')
   /* output
   start
   end
   */

   console.log('start')
   const myPromise= new Promise((resolve)=>resolve('done'))

   function first(){
    myPromise.then(res=>console.log(res))
    console.log('first')
   }

   async function second(){
    console.log(await myPromise);
    console.log('second')
   }
   first();
   second();
   console.log('end')
   /*output
   start
   first
   end
   done done 
   second */