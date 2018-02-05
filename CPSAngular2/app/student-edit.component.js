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
var router_1 = require('@angular/router');
var StudentEditComponent = (function () {
    function StudentEditComponent(_employeeService, _formBuilder, route) {
        this._employeeService = _employeeService;
        this._formBuilder = _formBuilder;
        this.route = route;
        this.updateStudentFlag = false;
        this.employees = [];
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.stdId = params['stdId'];
            _this.stdName = params['stdName'];
            _this.fatherName = params['fatherName'];
        });
        this.userForm = this._formBuilder.group({
            stdName: [this.stdName, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            fatherName: [this.fatherName],
            motherName: [],
            address: this._formBuilder.group({
                resiAddress: [],
                city: [],
                village: []
            })
        });
        if (this.stdId != 0)
            this.updateStudentFlag = true;
    };
    StudentEditComponent.prototype.addStudent = function () {
        var _this = this;
        this._employeeService.addStudent(this.userForm.value)
            .subscribe(function (data) { console.log(data); }, function (error) { return _this.errorMsg = error; });
    };
    StudentEditComponent.prototype.updateStudentDetail = function () {
        var _this = this;
        this._employeeService.updateStudent(this.userForm.value)
            .subscribe(function (data) { console.log(data); }, function (error) { return _this.errorMsg = error; });
    };
    StudentEditComponent = __decorate([
        core_1.Component({
            selector: 'student-edit',
            templateUrl: 'app/student-info.component.html',
            providers: [student_service_1.EmployeeService],
            styles: ["\n        input.ng-invalid {border-left: 5px solid red;}\n        input.ng-valid {border-left: 5px solid green;}\n    "]
        }), 
        __metadata('design:paramtypes', [student_service_1.EmployeeService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], StudentEditComponent);
    return StudentEditComponent;
}());
exports.StudentEditComponent = StudentEditComponent;
//# sourceMappingURL=student-edit.component.js.map