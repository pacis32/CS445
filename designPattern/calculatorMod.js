const Calculator=(function(){
    let x, y; 
    return { 
      calculator(num1,num2){
        x=num1;
        y=num2;
      },
  
    sum(){
    return x+y;
    },

    sub(){
        return x-y;
    },

  
   

  }

})()


Calculator.calculator(2,3)
console.log(Calculator.sum())
console.log(Calculator.sub())

