package com.cts.taskManager.service;

import java.util.List;

import com.cts.taskManager.service.dto.TaskDto;

public interface TaskService {

	public TaskDto createTask(TaskDto Task);

	public List<TaskDto> getTasks();

	public TaskDto findById(int id);

	public TaskDto update(TaskDto Task, int id);

	public void deleteTaskById(int id);
	
	public List<TaskDto> getParentTasks();

}