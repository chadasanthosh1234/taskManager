package com.cts.taskManager.service.impl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.taskManager.domain.Project;
import com.cts.taskManager.domain.Task;
import com.cts.taskManager.domain.User;
import com.cts.taskManager.repositories.ProjectRepository;
import com.cts.taskManager.repositories.TaskRepository;
import com.cts.taskManager.repositories.UserRepository;
import com.cts.taskManager.service.TaskService;
import com.cts.taskManager.service.dto.TaskDto;
import com.cts.taskManager.service.transform.TaskDtoTransform;
import com.cts.taskManager.service.transform.TaskTransform;

@Service
@Transactional
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskTransform taskTransform;

	@Autowired
	private TaskDtoTransform taskDtoTransform;

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public TaskDto createTask(TaskDto task) {
		
		if(task.getStartDate() == null) {
			task.setStartDate(new Date());
		}
		if(task.getEndDate() == null) {
			Calendar cal = Calendar.getInstance();
	        cal.setTime(task.getStartDate());
	        cal.add(Calendar.DATE, 1); 
	        task.setEndDate(cal.getTime());
		}

		Project foundProject = projectRepository.findById(task.getProject().getProjectId()).orElse(null);
		User foundUser = userRepository.findById(task.getUser().getUserId()).orElse(null);

		Task newTask = taskDtoTransform.apply(task);
		Task savedTask = taskRepository.save(newTask);

		savedTask.setProject(foundProject);
		savedTask.setUser(foundUser);

		return taskTransform.apply(taskRepository.save(savedTask));

	}

	@Override
	public List<TaskDto> getTasks() {
		return StreamSupport.stream(taskRepository.findAll().spliterator(), false).map(taskTransform)
				.collect(Collectors.toList());
	}

	@Override
	public List<TaskDto> getParentTasks() {
		return StreamSupport.stream(taskRepository.findAll().spliterator(), false).map(taskTransform)
				.filter(taskDto -> taskDto.getParentTask() == null).collect(Collectors.toList());
	}

	@Override
	public TaskDto findById(int id) {
		return taskTransform.apply(taskRepository.findById(id).orElse(null));
	}

	@Override
	public TaskDto update(TaskDto task, int id) {

		Task taskRecord = taskRepository.findById(id).orElse(null);
		if (taskRecord == null) {
			throw new ValidationException("Unable to find task with id " + id);
		}

		Project projectRecord = projectRepository.findById(task.getProject().getProjectId()).orElse(null);
		User userRecord = userRepository.findById(task.getUser().getUserId()).orElse(null);

		taskRecord.setEndDate(task.getEndDate());
		taskRecord.setPriority(task.getPriority());
		taskRecord.setTask(task.getTask());
		taskRecord.setStartDate(task.getStartDate());
		taskRecord.setStatus(task.getStatus());
		taskRecord.setProject(projectRecord);
		taskRecord.setUser(userRecord);

		return taskTransform.apply(taskRepository.save(taskRecord));
	}

	@Override
	public void deleteTaskById(int id) {
		taskRepository.deleteById(id);

	}

}