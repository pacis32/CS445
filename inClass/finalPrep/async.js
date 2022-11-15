

function makeRequest(location){
    new Promise((resolve, reject)=>{
        console.log(`makingRequest to ${location}`)
        if(location==='Google'){
            resolve('Hi from Google');
        }else{
             reject ('we can only talk to google')
        }
    })
   
}
function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('google').then(response =>{
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResponse =>{
//     console.log(processResponse)
// }).catch(err=>{
//     console.log(err)
// })

async function doWork(){
    try{
        const response= await makeRequest('Google')
        console.log('Response Received')
        const processResponse= await processRequest(response)
        console.log(processResponse)
    }
    catch(error){
        console.log(err)
    }
}

doWork()