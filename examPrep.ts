/**
 * Create a concrete class named Hourly which extends the feature from interface Employee with following properties and methods:
                             
properties: c – Number type, hoursPerWeek – Number Type
methods: provide implementation for calcMonthlyPay – algorithm: monthly pay = hourlywage * hoursperweek * 4
NOTE: After you implement the Hourly class, make sure it satisfies the Department class below which means there’s no syntax error in Department class.
3. Implement the
method calcMonthlyAverageSalaryOfDepartme nt() in the class Department below. In
the Department class, the employees properties hold all employees within an
array. calcMonthlyAverageSalaryOfDepartmen t() method is used to calculate and return the average of all employees’ monthly pay in current department.
NOTE: In this question, you can use any accessor
modifier, but make sure it matches the requirement above.
class Department {
empId: string = 'Dept01';
employees = [new Hourly(610001, 15, 6), new Hourly(610002, 16, 8), new Hourly(610003, 20, 5)]; calcMonthlyAverageSalaryOfDepartment() {
//implement this method only, no need to copy other parts of Department class in your answer }
}
 */
interface Employee{
    EmpId:number;
    hoursPerWeek:number;
    calcMonthlyPay():number;
}


class Hourly implements Employee {
    
    constructor(public EmpId:number,public hoursPerWeek:number,public hourlyWage:number){

    }

    calcMonthlyPay(): number {
        return this.hourlyWage * this.hoursPerWeek * 4
    }

}

class department {
    
EmpId:string = 'Dept01';
employees=[new Hourly(23005,15,8),new Hourly(23006,30,8),new Hourly(23007,20,10),new Hourly(23008,17.5,8)];

    calcMonthlyAverageSalaryOfDepartment(){
        return this.employees.reduce((average, current,index,arr)=> average+current.calcMonthlyPay()/arr.length,0)
    }
}