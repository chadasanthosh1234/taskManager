package com.cts.taskManager.repositories;


import org.springframework.data.repository.CrudRepository;

import com.cts.taskManager.domain.Project;

public interface ProjectRepository extends CrudRepository<Project, Integer> {

}