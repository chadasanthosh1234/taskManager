package com.cts.taskManager.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.taskManager.model.ParentTask;

@Repository
public interface ParentTaskRepository  extends JpaRepository<ParentTask,Integer>{

}
