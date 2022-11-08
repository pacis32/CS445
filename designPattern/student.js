const Student=(function(){
    let fName, lName, grades;

    return {
        student( nam1,nam2){
            fName=nam1;
            lName=nam2;
            grades=[];

        },
        enterGrade(grade){
          grades.push(grade);
          return grades;
        },
        getAverage(){
         return  grades.reduce((average,grade)=> average+grade/grades.length,0);
        },

        getStudentInfo(){
            return(`${fName} ${lName}: ${this.getAverage()}`)
        }
    }
})();
Student.student('john','marira');
console.log(Student.getAverage());
Student.enterGrade(90);
Student.enterGrade(80);
Student.enterGrade(100);
console.log(Student.getAverage());

Student.student('Ndahiriwe','Kayove');
console.log(Student.getAverage());
Student.enterGrade(80);
Student.enterGrade(70);
Student.enterGrade(60);
console.log(Student.getAverage());
console.log(Student.getStudentInfo());


