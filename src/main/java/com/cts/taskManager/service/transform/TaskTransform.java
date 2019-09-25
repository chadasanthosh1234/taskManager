package com.cts.taskManager.service.transform;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.taskManager.domain.Task;
import com.cts.taskManager.service.dto.TaskDto;

@Component
public class TaskTransform implements Function<Task, TaskDto> {
	@Autowired
	private UserTransform userTransform;
	
	@Autowired
	private ProjectTransform projectTransform;

	@Override
	public TaskDto apply(Task t) {

		if (t == null) {
			return null;
		}

		TaskDto newTask = new TaskDto();
		newTask.setTaskId(t.getTaskId());
		newTask.setTask(t.getTask());
		newTask.setPriority(t.getPriority());
		newTask.setStartDate(t.getStartDate());
		newTask.setEndDate(t.getEndDate());
		newTask.setStatus(t.getStatus());

		newTask.setParentTask(apply(t.getParentTask()));
		newTask.setProject(projectTransform.apply(t.getProject()));
		newTask.setUser(userTransform.apply(t.getUser()));

		return newTask;
	}
}
