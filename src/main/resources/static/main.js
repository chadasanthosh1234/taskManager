(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_manager_task_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-manager/task-manager.component */ "./src/app/task-manager/task-manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-create/task-create.component */ "./src/app/task-create/task-create.component.ts");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var appRoutes = [
    {
        path: 'tasks',
        component: _task_manager_task_manager_component__WEBPACK_IMPORTED_MODULE_4__["TaskManagerComponent"],
        data: { title: ' Task List' }
    },
    {
        path: 'task-detail/:id',
        component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"],
        data: { title: 'Task Details' }
    },
    {
        path: 'task-create',
        component: _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_9__["TaskCreateComponent"],
        data: { title: 'Create Task' }
    },
    {
        path: 'task-edit/:id',
        component: _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_10__["TaskEditComponent"],
        data: { title: 'Edit Task' }
    },
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _task_manager_task_manager_component__WEBPACK_IMPORTED_MODULE_4__["TaskManagerComponent"],
                _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"],
                _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_9__["TaskCreateComponent"],
                _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_10__["TaskEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task-create/task-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-create/task-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stY3JlYXRlL3Rhc2stY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task-create/task-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-create/task-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Task</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form  #taskForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.name\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Priority</label>\n          <input type=\"range\" class=\"form-control\" [(ngModel)]=\"task.priority\" name=\"priority\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Parent Task Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.parentTaskName\" name=\"parentTaskName\">\n        </div>\n\t\t \n        <div class=\"form-group\">\n          <label for=\"name\">Start Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.startDate\" name=\"startDate\" required>\n        </div>\n\t\t<div class=\"form-group\">\n          <label for=\"name\">End Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.endDate\" name=\"endDate\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\" (click)=\"saveTask()\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/task-create/task-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-create/task-create.component.ts ***!
  \******************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.task = {};
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
    };
    TaskCreateComponent.prototype.saveTask = function () {
        var _this = this;
        this.http.post('/tasks', this.task)
            .subscribe(function (res) {
            _this.router.navigate(['/tasks', res]);
        }, function (err) {
            console.log(err);
        });
    };
    TaskCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/task-create/task-create.component.html"),
            styles: [__webpack_require__(/*! ./task-create.component.css */ "./src/app/task-create/task-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/task-detail/task-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ task.name }}</h1>\n  <dl class=\"list\">\n    <dt>Id</dt>\n    <dd>{{ task.id }}</dd>\n\t<dt>Priority</dt>\n    <dd>{{ task.priority }}</dd>\n    <dt>Parent Task Name</dt>\n    <dd>{{ task.parentTaskName }}</dd>\n    <dt>Parent Task Id</dt>\n    <dd>{{ task.parentTaskId }}</dd>\n    <dt>Task Start Date</dt>\n    <dd>{{ task.startDate }}</dd>\n\t<dt>Task End Date</dt>\n    <dd>{{ task.endDate }}</dd>\n  </dl>\n</div>"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, http) {
        this.route = route;
        this.http = http;
        this.task = {};
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.getTaskDetail(this.route.snapshot.params['id']);
    };
    TaskDetailComponent.prototype.getTaskDetail = function (id) {
        var _this = this;
        this.http.get('/tasks/' + id).subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ./task-detail.component.css */ "./src/app/task-detail/task-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZWRpdC90YXNrLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Task</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form #taskForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.name\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Priority</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.priority\" name=\"priority\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Parent Task Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.parentTaskName\" name=\"parentTaskName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Start Date</label>\n          <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"task.startDate\" name=\"startDate\" required>\n        </div>\n\t\t\n\t\t <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\" (click)=\"updateTask(task.id)\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(http, router, route, datePipe) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.task = {};
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.getTask(this.route.snapshot.params['id']);
    };
    TaskEditComponent.prototype.getTask = function (id) {
        var _this = this;
        this.http.get('/tasks/' + id).subscribe(function (data) {
            _this.task = data;
            _this.updateDateFormat(_this.task);
        });
    };
    TaskEditComponent.prototype.updateTask = function (id) {
        var _this = this;
        this.http.post('/tasks/' + id, this.task)
            .subscribe(function (res) {
            var id = res['id'];
            _this.router.navigate(['/tasks', res]);
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent.prototype.updateDateFormat = function (task) {
        task.startDate = this.datePipe.transform(task.startDate, "yyyy-MM-dd");
    };
    TaskEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/task-edit/task-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task-manager/task-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/task-manager/task-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbWFuYWdlci90YXNrLW1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task-manager/task-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/task-manager/task-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Task Manager</h1>\n  <h4><a [routerLink]=\"['/task-create']\" class=\"btn btn-default btn-lg\">\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">Add Task</span></a>\n  </h4>\n  <h4>\n  <form #taskForm=\"ngForm\">\n    <div class=\"form-group\">\n        <label for=\"name\">Task Name:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.name\" name=\"name\">\n        <label for=\"name\">Parent Task:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.parentTaskName\" name=\"parentTaskName\"><br/>\n\t\t<label for=\"name\">PriorityFrom:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.priorityFrom\" name=\"priorityFrom\">\n\t\t<label for=\"name\">PriorityTo:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.priorityTo\" name=\"priorityTo\"><br/>\n\t\t<label for=\"name\">Start Date:</label>\n\t\t<input type=\"date\" [(ngModel)]=\"task.startDate\" name=\"startDate\">\n\t\t<label for=\"name\">End Date:</label>\n\t\t<input type=\"date\" [(ngModel)]=\"task.endDate\" name=\"endDate\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\" (click)=\"searchTask(task)\">Search Task</button><br/>\n\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\" (click)=\"clearTasks()\">Clear</button>\n    </div>\n </form>\n  </h4>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Priority</th>\n        <th>ParentTaskName</th>\n\t\t<th>startDate</th>\n        <th>endDate</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let task of tasks\">\n        <td>{{ task.name }}</td>\n        <td>{{ task.priority }}</td>\n        <td>{{ task.parentTaskName }}</td>\n        <td>{{ task.startDate | date: 'dd/MM/yyyy' }}</td>\n        <td>{{ task.endDate | date: 'dd/MM/yyyy'}}</td>\n\t\t<td><a [routerLink]=\"['/task-detail', task.id]\">View Task</a></td>\n\t\t<td><a [routerLink]=\"['/task-edit', task.id]\">Edit</a></td>\n\t\t<button (click)=\"endTask(task.id)\">End Task</button>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/task-manager/task-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/task-manager/task-manager.component.ts ***!
  \********************************************************/
/*! exports provided: TaskManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerComponent", function() { return TaskManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TaskManagerComponent = /** @class */ (function () {
    function TaskManagerComponent(http) {
        this.http = http;
        this.task = {};
    }
    TaskManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/tasks').subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TaskManagerComponent.prototype.endTask = function (id) {
        var _this = this;
        this.http.get('/tasks/endTask/' + id)
            .subscribe(function (res) {
            var id = res['id'];
            _this.tasks = res;
        }, function (err) {
            console.log(err);
        });
    };
    TaskManagerComponent.prototype.searchTask = function (task) {
        var _this = this;
        this.http.post('/tasks/searchTask', this.task)
            .subscribe(function (res) {
            _this.tasks = res;
        }, function (err) {
            console.log(err);
        });
    };
    TaskManagerComponent.prototype.clearTasks = function () {
        var _this = this;
        this.task = {};
        this.http.get('/tasks').subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TaskManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-manager',
            template: __webpack_require__(/*! ./task-manager.component.html */ "./src/app/task-manager/task-manager.component.html"),
            styles: [__webpack_require__(/*! ./task-manager.component.css */ "./src/app/task-manager/task-manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskManagerComponent);
    return TaskManagerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Downloads\taskManager\taskManager\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map