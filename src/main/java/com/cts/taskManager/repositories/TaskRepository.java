package com.cts.taskManager.repositories;

import org.springframework.data.repository.CrudRepository;

import com.cts.taskManager.domain.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {

}