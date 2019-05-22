package com.cts.taskManager.projects;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projects")
public class Project {
	String project;
    String manager;
    String priority;
    String priorityFrom;
    String priorityTo;    
    Date startDate;
    Date endDate;
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getManager() {
		return manager;
	}
	public void setManager(String manager) {
		this.manager = manager;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getPriorityFrom() {
		return priorityFrom;
	}
	public void setPriorityFrom(String priorityFrom) {
		this.priorityFrom = priorityFrom;
	}
	public String getPriorityTo() {
		return priorityTo;
	}
	public void setPriorityTo(String priorityTo) {
		this.priorityTo = priorityTo;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
