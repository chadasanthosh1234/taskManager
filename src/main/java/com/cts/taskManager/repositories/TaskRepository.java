package com.cts.taskManager.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cts.taskManager.util.Task;

@Repository
public interface TaskRepository {
   Task findById(String Id);
   
   Task addTask(Task task);
   
   List<Task> findAllTasks();

   List<Task> searchTask(Task task);

   
}