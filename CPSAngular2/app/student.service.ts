import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService{
	private _addStudentURL: string = "http://localhost:8080/CPSSpringMVC3/student/addStudent";
    private _editStudentURL: string = "http://localhost:8080/CPSSpringMVC3/student/editStudent"
    private _getStudentListURL: string = "http://localhost:8080/CPSSpringMVC3/student";
	
    constructor(private _http: Http){}
	getEmployees(){
		return this._http.get(this._getStudentListURL)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}
     
    addStudent(userForm: FormGroup){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._addStudentURL, JSON.stringify(userForm), { headers: headers })
                   .map((data: Response) => data.json())
                   .catch(this._errorHandler);
    }
    
    updateStudent(userForm: FormGroup){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._editStudentURL, JSON.stringify(userForm), { headers: headers })
                   .map((data: Response) => data.json())
                   .catch(this._errorHandler);
    }

	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
    
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}