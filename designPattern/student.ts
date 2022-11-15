
class Student {

 constructor( private fname:string,
    private lname:string
    , private grades:number[]){

     }
    setName(name){
      this.fname=name;
    }



    private addGrade(grade:number):void{
        this.grades.push(grade)
     }

    private computeAverageGrade():number{
        return this.grades.reduce((average,curr,index,arr)=>average +curr/arr.length,0)
     }
}
 

const std= new Student('aa','ba',[1,2,3,4]);
std.setName()
