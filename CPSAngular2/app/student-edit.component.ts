import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'student-edit',
    templateUrl : 'app/student-info.component.html',
    providers: [EmployeeService],
    styles:[`
        input.ng-invalid {border-left: 5px solid red;}
        input.ng-valid {border-left: 5px solid green;}
    `]

})

export class StudentEditComponent implements OnInit{
    userForm: FormGroup;
    public stdId; stdName; fatherName;
    updateStudentFlag:boolean = false;
    employees = [];
    errorMsg: string;
    constructor(private _employeeService : EmployeeService, private _formBuilder:FormBuilder, private route: ActivatedRoute ){}
    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
          this.stdId = params['stdId'];
          this.stdName = params['stdName'];
          this.fatherName = params['fatherName'];
        })
        this.userForm = this._formBuilder.group({
            stdName : [this.stdName, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            fatherName: [this.fatherName],
            motherName: [],
            address:this._formBuilder.group({
                resiAddress:[],
                city:[],
                village: []
            })
        })
        if(this.stdId != 0)
            this.updateStudentFlag = true;
    }
    
    addStudent(): void {
     this._employeeService.addStudent(this.userForm.value)
         .subscribe( data => { console.log(data);},
                     error => this.errorMsg = <any>error);
    }
    
    updateStudentDetail(): void {
     this._employeeService.updateStudent(this.userForm.value)
         .subscribe( data => { console.log(data);},
                     error => this.errorMsg = <any>error);
    }   
     
}