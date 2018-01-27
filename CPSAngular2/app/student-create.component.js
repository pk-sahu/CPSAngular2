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
var student_service_1 = require('./student.service');
var forms_1 = require('@angular/forms');
var StudentCreateComponent = (function () {
    function StudentCreateComponent(_employeeService, _formBuilder) {
        this._employeeService = _employeeService;
        this._formBuilder = _formBuilder;
        this.employees = [];
    }
    StudentCreateComponent.prototype.ngOnInit = function () {
        /*this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData,
                       resEmployeeError => this.errorMsg = resEmployeeError);*/
        this.userForm = this._formBuilder.group({
            stdName: ['John', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            fatherName: [],
            motherName: [],
            address: this._formBuilder.group({
                resiAddress: [],
                city: [],
                village: []
            })
        });
    };
    StudentCreateComponent.prototype.addStudent = function () {
        var _this = this;
        this._employeeService.addStudent(this.userForm.value)
            .subscribe(function (data) { console.log(data); }, function (error) { return _this.errorMsg = error; });
    };
    StudentCreateComponent = __decorate([
        core_1.Component({
            selector: 'student-create',
            templateUrl: 'app/student-info.component.html',
            providers: [student_service_1.EmployeeService],
            styles: ["\n        input.ng-invalid {border-left: 5px solid red;}\n        input.ng-valid {border-left: 5px solid green;}\n    "]
        }), 
        __metadata('design:paramtypes', [student_service_1.EmployeeService, forms_1.FormBuilder])
    ], StudentCreateComponent);
    return StudentCreateComponent;
}());
exports.StudentCreateComponent = StudentCreateComponent;
//# sourceMappingURL=student-create.component.js.map