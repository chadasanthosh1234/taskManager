package com.cts.taskManager.util;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projects")
public class Project {
	String projectId;
	String projectName;
 	Date startDate;
    Date endDate;
    String priority;
    int completedTasks;
    int totalTasks;
    String userId;
    String userName;
    
    //POJOs
    public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public int getCompletedTasks() {
		return completedTasks;
	}
	public void setCompletedTasks(int completedTasks) {
		this.completedTasks = completedTasks;
	}
	public int getTotalTasks() {
		return totalTasks;
	}
	public void setTotalTasks(int totalTasks) {
		this.totalTasks = totalTasks;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
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
