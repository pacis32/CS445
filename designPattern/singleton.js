class Singleton{
    static instance= new Singleton( );
    constructor(){

    //    if(!Singleton.instance){
    //     Singleton.instance=this;
    //    }
       return Singleton.instance;
    }
}

const instance1= new Singleton();

const instance2= new Singleton();

