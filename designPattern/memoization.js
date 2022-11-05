
const memoize =(fn)=>{
    const cache={};
    return function(...args){
     if(cache[args]){
        return cache[args]
     }
      const result =fn(...args)
      cache[args]=result;
      return result;
    };
};


const slowFunc=num=>{
    for (let i = 0; i <= num; i++) {
        if(i==num){
            return i;
        }
    }
};
const fastFunc= memoize(slowFunc);
console.time()
 console.log(slowFunc(200))
console.timeEnd();

console.log("...................")
console.time()
console.log(fastFunc(2000))
console.timeEnd()

