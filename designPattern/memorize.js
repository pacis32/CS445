const memoize =(fn)=>{
    const cache={}
    return function(...args){
        if(cache[args])
        return cache[args]
        const result= fn(...args)
        cache[args]=result;
        return result;
    }
};

const f= function(num){
    if(num<0)
    return -1;
    else if(num==0){
        return 1
    }
    else 
    return (num*f(num-1));
}

let res= memoize(f);

console.time()
console.log(f(45))
console.timeEnd()

console.time()
console.log(res(45))
console.timeEnd()

