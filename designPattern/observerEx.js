class Subject{
    constructor(){
       this.subscribers=[];

    }

    subscribe(fn){
       this.subscribers.push(fn);
    }

    unsubscribe(fn){
      this.subscribers=this.subscribers.filter(sub=>sub!==fn)
    }

    emmit(msg){
     this.subscribers.forEach(ob => ob(msg));
    }
}
const subject = new Subject();
subject.subscribe(msg=>console.log(`Observer A got a message: ${msg}`));
const foo=msg=>console.log(`Observer B got a message:${msg}`)
subject.subscribe(foo);
subject.emmit('Hi');

subject.unsubscribe(foo)
subject.emmit("huanyin")



