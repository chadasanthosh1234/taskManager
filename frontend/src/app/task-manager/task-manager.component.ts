import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
	
    tasks: any;
    task = {};
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/tasks').subscribe(data => {
        this.tasks = data;
        });
    }
	
    endTask(id){
		this.http.get('/tasks/endTask/'+id)
			.subscribe(res => {
			let id = res['id'];
			this.tasks=res;
		}, (err) => {
            console.log(err);
		});
    }
	
    searchTask(task){
		this.http.post('/tasks/searchTask', this.task)
			.subscribe(res => {
			this.tasks = res;
		}, (err) => {
            console.log(err);
		});	      
	}
	
 	clearTasks(){
		this.task = {};
		this.http.get('/tasks').subscribe(data => {
        this.tasks = data;
       });
	}

}


