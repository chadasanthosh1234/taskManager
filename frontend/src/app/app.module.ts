import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskManagerComponent,
    data: { title: ' Task List' }
  },
  {
    path: 'task-detail/:id',
    component: TaskDetailComponent,
    data: { title: 'Task Details' }
  },
  {
    path: 'task-create',
    component: TaskCreateComponent,
    data: { title: 'Create Task' }
  },
  {
    path: 'task-edit/:id',
    component: TaskEditComponent,
    data: { title: 'Edit Task' }
  },
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskDetailComponent,
    TaskCreateComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
