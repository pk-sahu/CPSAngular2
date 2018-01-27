import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { StudentListComponent } from './student-list.component'
import { StudentDetailComponent } from './student-detail.component'
import { StudentCreateComponent } from './student-create.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, StudentListComponent, StudentDetailComponent, StudentCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
