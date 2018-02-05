import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { AppComponent }   from './app.component';
import { StudentListComponent } from './student-list.component'
import { StudentDetailComponent } from './student-detail.component'
import { StudentCreateComponent } from './student-create.component'
import { StudentEditComponent } from './student-edit.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule,
                RouterModule.forRoot([
                    {path: '', component: AppComponent},
                    {path: 'addStudent', component: StudentCreateComponent},
                    {path: 'viewStudent', component: StudentListComponent},
                    {path: 'editStudent', component: StudentEditComponent}
                ]) ],
  declarations: [ AppComponent, StudentListComponent, StudentDetailComponent, StudentCreateComponent, StudentEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
