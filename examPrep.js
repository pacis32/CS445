var Hourly = /** @class */ (function () {
    function Hourly(EmpId, hoursPerWeek, hourlyWage) {
        this.EmpId = EmpId;
        this.hoursPerWeek = hoursPerWeek;
        this.hourlyWage = hourlyWage;
    }
    Hourly.prototype.calcMonthlyPay = function () {
        return this.hourlyWage * this.hoursPerWeek * 4;
    };
    return Hourly;
}());
var department = /** @class */ (function () {
    function department() {
        this.EmpId = 'Dept01';
        this.employees = [new Hourly(23005, 15, 8), new Hourly(23006, 30, 8), new Hourly(23007, 20, 10), new Hourly(23008, 17.5, 8)];
    }
    department.prototype.calcMonthlyAverageSalaryOfDepartment = function () {
        return this.employees.reduce(function (average, current, index, arr) { return average + current.calcMonthlyPay() / arr.length; }, 0);
    };
    return department;
}());
