import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService{
	private _url: string = "apidata/employeeData.json"
	/*private _url: string = "apidata/employeeData1.json"*/
	constructor(private _http: Http){}
	getEmployees(){
		/*return [
					{"id":1, "name": "Andrew", "gender": "Male"},
					{"id":2, "name": "Brandon", "gender": "Male"},
					{"id":3, "name": "Christina", "gender": "Female"},
					{"id":4, "name": "Elena", "gender": "Female"}
				]*/
		return this._http.get(this._url)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}

}