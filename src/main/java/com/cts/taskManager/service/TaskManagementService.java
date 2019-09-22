package com.cts.taskManager.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.cts.taskManager.vo.ParentTaskVO;
import com.cts.taskManager.vo.ProjectVO;
import com.cts.taskManager.vo.TaskVO;
import com.cts.taskManager.vo.UserVO;

@Service
public interface TaskManagementService {
	void addUser(UserVO user);

	boolean deleteUser(int userId) throws Exception;

	List<UserVO> getAllUsers();

	void updateUser(UserVO userVO);

	void updateProject(ProjectVO projectVO);

	List<ProjectVO> getAllProjects();

	void saveOrUpdateProject(ProjectVO projectMgmt);

	List<UserVO> getDistinctUser();

	void suspendProject(@Valid ProjectVO vo);

	List<ParentTaskVO> getAllParentTasks();

	void saveTask(TaskVO task);

	List<TaskVO> getAllTasks();

	TaskVO getTask(String taskId);

	void updateTask(TaskVO task);

	List<TaskVO> getTasksByProject(int projectId);
}