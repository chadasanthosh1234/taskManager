package com.cts.taskManager.repositories;

import java.util.List;

import com.cts.taskManager.tasks.Task;

public interface TaskRepository {
   Task findById(String Id);
   
   Task addTask(Task task);
   
   List<Task> findAllTasks();

   List<Task> searchTask(Task task);

   
}