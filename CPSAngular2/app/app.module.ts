import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { AppComponent }   from './app.component';
import { EmployeeListComponent } from './employee-list.component'
import { StudentDetailComponent } from './student-detail.component'


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmployeeListComponent, StudentDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
