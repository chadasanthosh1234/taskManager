package com.cts.taskManager.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.taskManager.model.Project;


/**
 * @author Admin
 *
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{

	
	
}
