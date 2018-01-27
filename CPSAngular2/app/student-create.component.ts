import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
	selector: 'student-create',
	templateUrl : 'app/student-info.component.html',
    providers: [EmployeeService],
    styles:[`
        input.ng-invalid {border-left: 5px solid red;}
        input.ng-valid {border-left: 5px solid green;}
    `]

})

export class StudentCreateComponent implements OnInit{
	userForm: FormGroup;
    
    employees = [];
	errorMsg: string;
	constructor(private _employeeService : EmployeeService, private _formBuilder:FormBuilder ){}
	ngOnInit(){
		/*this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData, 
					   resEmployeeError => this.errorMsg = resEmployeeError);*/
         
        this.userForm = this._formBuilder.group({
            stdName : ['John', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            fatherName: [],
            motherName: [],
            address:this._formBuilder.group({
                resiAddress:[],
                city:[],
                village: []
            })
        })
	}
    
    addStudent(): void {
     this._employeeService.addStudent(this.userForm.value)
         .subscribe( data => { console.log(data);},
                     error => this.errorMsg = <any>error);
    }
    
    
}