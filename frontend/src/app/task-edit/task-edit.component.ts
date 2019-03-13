import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {

    task = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }

    ngOnInit() {
	    this.getTask(this.route.snapshot.params['id']);
    }
  
    getTask(id) {
		this.http.get('/tasks/'+id).subscribe(data => {
		this.task = data;
		this.updateDateFormat(this.task);
        });
    }

    updateTask(id) {
		this.http.post('/tasks/'+id, this.task)
		.subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/tasks', res]);
        }, (err) => {
          console.log(err);
        });
    }
  
    updateDateFormat(task){
	    task.startDate = this.datePipe.transform(task.startDate, "yyyy-MM-dd");
    }	 
}