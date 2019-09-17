package com.cts.taskManager.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cts.taskManager.util.Project;

@Repository
public interface ProjectRepository {
	Project findById(String Id);

	Project addProject(Project project);
	
	List<Project> findAllProjects();

	List<Project> searchProject(Project project);
}
