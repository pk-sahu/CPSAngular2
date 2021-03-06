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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._addStudentURL = "http://localhost:8080/CPSSpringMVC3/student/addStudent";
        this._editStudentURL = "http://localhost:8080/CPSSpringMVC3/student/editStudent";
        this._getStudentListURL = "http://localhost:8080/CPSSpringMVC3/student";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this._getStudentListURL)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.addStudent = function (userForm) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._addStudentURL, JSON.stringify(userForm), { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.updateStudent = function (userForm) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._editStudentURL, JSON.stringify(userForm), { headers: headers })
            .map(function (data) { return data.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype._errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=student.service.js.map