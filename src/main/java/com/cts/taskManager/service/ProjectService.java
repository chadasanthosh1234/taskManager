package com.cts.taskManager.service;

import java.util.List;

import com.cts.taskManager.service.dto.ProjectDto;

public interface ProjectService {

	public ProjectDto createProject(ProjectDto Project);

	public List<ProjectDto> getProjects();

	public ProjectDto findById(int id);

	public ProjectDto update(ProjectDto Project, int id);

	public void deleteProjectById(int id);

}
