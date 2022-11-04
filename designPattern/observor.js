
class Observer{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    nex(message){
        console.log(`${this.firstName} ${this.firstName}: ${message}`)
    }
}


class Subjects {
    constructor(){
        this.observerList=[]
    }

    subscribe(observer){
        this.observerList.push(observer);
    }

    notify(message){
       this.observerList.forEach(observer=observer.nex(message))
    }
}

const amazon= new Subject();
const ob1= new Subscribe("j","hum");
const ob2= new Subscribe("sum","tom");

