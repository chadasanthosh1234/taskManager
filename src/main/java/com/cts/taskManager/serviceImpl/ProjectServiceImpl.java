package com.cts.taskManager.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.StringUtils;

import com.cts.taskManager.repositories.ProjectRepository;
import com.cts.taskManager.util.Project;

public class ProjectServiceImpl implements ProjectRepository {

	@Autowired
    private MongoTemplate mongoTemplate;
	@Override
	public Project findById(String projectId) {
		Query query = new Query();
        query.addCriteria(Criteria.where("employeeId").is(projectId));
        return mongoTemplate.findOne(query, Project.class);
	}

	@Override
	public Project addProject(Project project) {
		return mongoTemplate.save(project);
	}

	@Override
	public List<Project> findAllProjects() {
		return mongoTemplate.findAll(Project.class);
	}

	@Override
	public List<Project> searchProject(Project project) {
		Query query = new Query();

		if (!StringUtils.isEmpty(project.getProjectName())) {
			query.addCriteria(Criteria.where("projectName").is(project.getProjectName()));
				
		}

		return mongoTemplate.find(query, Project.class);
	}

}
