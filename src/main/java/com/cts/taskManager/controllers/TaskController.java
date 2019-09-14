package com.cts.taskManager.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.taskManager.repositories.TaskRepository;
import com.cts.taskManager.util.Task;

@RestController
public class TaskController {

        @Autowired
        TaskRepository taskRepository;

        @RequestMapping(method=RequestMethod.GET, value="/tasks")
        public Iterable<Task> tasks() {
            return taskRepository.findAllTasks();
        }

        @RequestMapping(method=RequestMethod.POST, value="/tasks")
        public Task saveTask(@RequestBody Task task) {
            taskRepository.addTask(task);
            return task;
        }

        @RequestMapping(method=RequestMethod.GET, value="/tasks/{id}")
        public Task show(@PathVariable String id) {
            return taskRepository.findById(id);
        }

        @RequestMapping(method=RequestMethod.POST, value="/tasks/{id}")
        public Task updateTask(@PathVariable String id, @RequestBody Task task) {
            Task c = taskRepository.findById(id);
            if(task.getName() != null)
                c.setName(task.getName());
            if(task.getParentTaskName() != null)
                c.setParentTaskName(task.getParentTaskName());
            if(task.getParentTaskId() != null)
                c.setParentTaskId(task.getParentTaskId());
            if(task.getPriority() != null)
                c.setPriority(task.getPriority());
            if(task.getStartDate() != null)
                c.setStartDate(task.getStartDate());
            if(task.getEndDate() != null)
                c.setEndDate(task.getEndDate());
            if(task.getStartDate() != null)
                c.setStartDate(task.getStartDate());
            taskRepository.addTask(c);
            return task;
        }
        
        @RequestMapping(method=RequestMethod.GET, value="/tasks/endTask/{id}")
        public Iterable<Task> endTask(@PathVariable String id) {
            Task c = taskRepository.findById(id);
            c.setEndDate(new Date());
            taskRepository.addTask(c);
            return taskRepository.findAllTasks();
        }
        
        @RequestMapping(method=RequestMethod.POST, value="/tasks/searchTask")
        public Iterable<Task> searchTask(@RequestBody Task task) {
            return taskRepository.searchTask(task);
            
        }
    }

