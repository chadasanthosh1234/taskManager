package com.cts.taskManager.service.transform;

import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.cts.taskManager.domain.Task;
import com.cts.taskManager.service.dto.TaskDto;



@Component
public class TaskDtoTransform implements Function<TaskDto, Task> {

	@Override
	public Task apply(TaskDto t) {
		Task newTask = new Task();
		newTask.setTask(t.getTask());
		newTask.setPriority(t.getPriority());
		newTask.setStartDate(t.getStartDate());
		newTask.setEndDate(t.getEndDate());
		newTask.setStatus(t.getStatus());

		return newTask;
	}

}