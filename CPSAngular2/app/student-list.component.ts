import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './student.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
	selector: 'employee-list',
    templateUrl : 'app/student-list.html',
    providers: [EmployeeService]

})

export class StudentListComponent implements OnInit{
	employees = [];
    selectedEntry = {
        stdId:null,
        stdName: null,
        fatherName: null,
        address: {
                    resiAddress: null,
                    city: null,
                    village: null
                 }
    };
	errorMsg: string;
    //rootNode: any;
	constructor(private _employeeService : EmployeeService, private router: Router, rootNode: ElementRef){
        //jQuery(document).ready(() => {
         //   $('#studentListId').DataTable();
       // });    
       // this.rootNode = rootNode;
    }
	ngOnInit(){
		this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData, 
					   resEmployeeError => this.errorMsg = resEmployeeError);
       // $('#studentListId').DataTable();
	}
    
    onSelectionChange(entry) {
        //this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        this.selectedEntry.stdId = entry.stdId;
        this.selectedEntry.stdName = entry.stdName;
        this.selectedEntry.fatherName = entry.fatherName;
        this.selectedEntry.address.resiAddress = entry.resiAddress;
        this.selectedEntry.address.city = entry.city;
        this.selectedEntry.address.village = entry.village;
    }
    
    editStudentDetail(selectedEntry) {
        this.router.navigate(['/editStudent', selectedEntry]);
    }
    
}