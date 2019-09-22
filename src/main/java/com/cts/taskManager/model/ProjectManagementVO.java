package com.cts.taskManager.model;

public class ProjectManagementVO {

	User user;
	Project project;
	Task task;
	ParentTask parenTask;
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public Task getTask() {
		return task;
	}
	public void setTask(Task task) {
		this.task = task;
	}
	public ParentTask getParenTask() {
		return parenTask;
	}
	public void setParenTask(ParentTask parenTask) {
		this.parenTask = parenTask;
	}
		
}
