import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'employee-list',
	template: `<h2>Employee List</h2>
			   <h3>{{errorMsg}}</h3>
			  <ul *ngFor="let employee of employees">
			  	<li>{{employee.name}}</li>
			  </ul>`

})

export class StudentListComponent implements OnInit{
	employees = [];
	errorMsg: string;
	constructor(private _employeeService : EmployeeService){}
	ngOnInit(){
		/*this.employees = this._employeeService.getEmployees();*/
		this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData, 
					   resEmployeeError => this.errorMsg = resEmployeeError);
	}
}