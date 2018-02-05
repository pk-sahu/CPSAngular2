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
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var StudentListComponent = (function () {
    //rootNode: any;
    function StudentListComponent(_employeeService, router, rootNode) {
        this._employeeService = _employeeService;
        this.router = router;
        this.employees = [];
        this.selectedEntry = {
            stdId: null,
            stdName: null,
            fatherName: null,
            address: {
                resiAddress: null,
                city: null,
                village: null
            }
        };
        //jQuery(document).ready(() => {
        //   $('#studentListId').DataTable();
        // });    
        // this.rootNode = rootNode;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
        // $('#studentListId').DataTable();
    };
    StudentListComponent.prototype.onSelectionChange = function (entry) {
        //this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        this.selectedEntry.stdId = entry.stdId;
        this.selectedEntry.stdName = entry.stdName;
        this.selectedEntry.fatherName = entry.fatherName;
        this.selectedEntry.address.resiAddress = entry.resiAddress;
        this.selectedEntry.address.city = entry.city;
        this.selectedEntry.address.village = entry.village;
    };
    StudentListComponent.prototype.editStudentDetail = function (selectedEntry) {
        this.router.navigate(['/editStudent', selectedEntry]);
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'app/student-list.html',
            providers: [student_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [student_service_1.EmployeeService, router_1.Router, core_2.ElementRef])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map