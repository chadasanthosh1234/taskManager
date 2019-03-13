import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
	
	task = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
	  this.getTaskDetail(this.route.snapshot.params['id']);
  }
  
  getTaskDetail(id) {
    this.http.get('/tasks/'+id).subscribe(data => {
      this.task = data;
    });
  }
}