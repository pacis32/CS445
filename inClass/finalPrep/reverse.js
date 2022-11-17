 String.prototype.reverseAsync=function(){
    new Promise((resolve,reject)=>{
        let arr= this.split('');
        resolve(arr.reverse().join(''));
    }).then(console.log)
 }

async function  reverseHelp(arr){
    arr=arr.split('');
    return arr.reverse().join('');
 }

String.prototype.reverseAsync =async function () {
console.log(await reverseHelp(this))
 }
 