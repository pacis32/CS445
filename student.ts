class Student{
  

 constructor( private Fname:string,
    private Lname:string
    , private grades:number[]){

     }

     addGrade(grade:number):void{
        this.grades.push(grade)
     }

     computeAverageGrade():number{
        return this.grades.reduce((average,curr,index,arr)=>average +curr/arr.length,0)
     }
}
 

