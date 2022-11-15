function handleJimWork() {
    return new Promise((resolve, reject) => {
      // Slow method that runs in the background
        resolve(100)
        reject('Error')
      
    })
  }
  
  handleJimWork().then(amount => {
    console.log(`Jim paid you ${amount} dollars`)
  }).catch(reason => {
    console.error(`Error: ${reason}`)
  })

  // advanced Promises feactures

  handleJimWork()
  .then(amount=>{
    console.log(`Jim paid you ${amount} dollars`)
}).catch(reason => {
  console.error(`Error: ${reason}`)

  }).finally(()=>{
    console.log("this always runs")
  })

  function one() {
    return new Promise(resolve => {
      doSomething()
      resolve("From One")
    })
  }
  
  function two() {
    return new Promise(resolve => {
      doSomethingElse()
      resolve("From Two")
    })
  }
  
  Promise.all([
    one(),
    two()
  ]).then(messages => {
    console.log(messages)
    // ["From One", "From Two"]
  }).catch(error => {
    // First error if any error
  })
  Promise.race([
    one(),
    two()
  ]).then(firstMessage => {
    console.log(firstMessage)
    // Message from first promise to finish if it was a success
  }).catch(firstError => {
    // Message from first promise to finish if it was an error
  })

//This method is a shorthand for returning a promise that resolves immediately. This is useful if you need to pass a promise to
// something but do not already have a promise.
  Promise.resolve(200).then(amount => {
    console.log(amount)
    // 200
  })


/**
 * This method is the same as Promise.resolve, but for returning a failing promise.
 */
 Promise.reject("Error").catch(message => {
    console.error("Error")
    // Error
  })

  //
  let p= new Promise((resolve,reject)=>{
    let a=1+2;
    if(a==2){
        resolve("success")
    }

else {
    reject('failed')
}
  })

  p.then(message=>{
    console.log(`this is the then ${message}`)
  }).catch(message=>{
    console.log(`this is the then ${message}`)
  })