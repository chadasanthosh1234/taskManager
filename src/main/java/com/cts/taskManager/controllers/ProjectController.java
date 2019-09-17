package com.cts.taskManager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.taskManager.repositories.ProjectRepository;
import com.cts.taskManager.util.Project;

@RestController
public class ProjectController {
	
	@Autowired
    ProjectRepository projectRepository;
	
	@RequestMapping(method=RequestMethod.GET, value="/projects")
    public Iterable<Project> projects() {
        return projectRepository.findAllProjects();
    }

	@RequestMapping(method=RequestMethod.POST, value="/projects")
    public Project saveProject(@RequestBody Project project) {
        projectRepository.addProject(project);
        return project;
    }
	
	@RequestMapping(method=RequestMethod.GET, value="/projects/{id}")
    public Project showProject(@PathVariable String projectId) {
        return projectRepository.findById(projectId);
    }
	
	@RequestMapping(method=RequestMethod.POST, value="/projects/{id}")
    public Project updateUser(@PathVariable String projectId, @RequestBody Project project) {
        Project c = projectRepository.findById(projectId);
        if(project.getProjectName() != null) {
            c.setProjectName(project.getProjectName());
        }
        projectRepository.addProject(c);
        return project;
    }
	
}
