package com.cts.taskManager.tasks;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {

    @Id
    String id;
    String name;
    String parentTaskName;
    String parentTaskId;
    String priority;
    String priorityFrom;
    String priorityTo;    
    Date startDate;
    Date endDate;

    public Task() {
    }

    public Task(String id, String name, String parentTaskName, String parentTaskId, String priority, 
    		String priorityFrom, String priorityTo, Date startDate, Date endDate) {
        this.id = id;
    	this.name = name;
    	this.parentTaskName = parentTaskName;
    	this.parentTaskId = parentTaskId;
        this.priority = priority;
        this.priorityFrom = priorityFrom;
        this.priorityTo = priorityTo;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getParentTaskName() {
        return parentTaskName;
    }

    public void setParentTaskName(String parentTaskName) {
        this.parentTaskName = parentTaskName;
    }

    public String getParentTaskId() {
        return parentTaskId;
    }

    public void setParentTaskId(String parentTaskId) {
        this.parentTaskId = parentTaskId;
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
}
