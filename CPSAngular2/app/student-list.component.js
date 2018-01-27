"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var StudentListComponent = (function () {
    function StudentListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = [];
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.employees = this._employeeService.getEmployees();*/
        this._employeeService.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            template: "<h2>Employee List</h2>\n\t\t\t   <h3>{{errorMsg}}</h3>\n\t\t\t  <ul *ngFor=\"let employee of employees\">\n\t\t\t  \t<li>{{employee.name}}</li>\n\t\t\t  </ul>"
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map