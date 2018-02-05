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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var student_list_component_1 = require('./student-list.component');
var student_detail_component_1 = require('./student-detail.component');
var student_create_component_1 = require('./student-create.component');
var student_edit_component_1 = require('./student-edit.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: app_component_1.AppComponent },
                    { path: 'addStudent', component: student_create_component_1.StudentCreateComponent },
                    { path: 'viewStudent', component: student_list_component_1.StudentListComponent },
                    { path: 'editStudent', component: student_edit_component_1.StudentEditComponent }
                ])],
            declarations: [app_component_1.AppComponent, student_list_component_1.StudentListComponent, student_detail_component_1.StudentDetailComponent, student_create_component_1.StudentCreateComponent, student_edit_component_1.StudentEditComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map