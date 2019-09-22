package com.cts.taskManager.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.taskManager.model.User;
import com.cts.taskManager.vo.ManagerVO;

/**
 * @author Admin
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from Users u where u.employeeId=:empId and u.projectId=0 and u.taskId=0")
	User findUserByEmployeeId(@Param("empId") String empId);

	@Query("select  new com.cts.project.management.vo.ManagerVO(u.employeeId, u.firstName,u.lastName) from Users u")
	List<ManagerVO> findAllManagers();

	@Query("select users from Users users where users.projectId=0 and users.taskId=0")
	List<User> findUsers();

	@Query("select users from Users users where users.projectId=:projectId and users.taskId =0")
	User findUserByProjectId(@Param("projectId") int projectId);

	@Query("select users from Users users where users.projectId=:projectId and users.userId=:userId")
	void deleteUserByProjectAndUserId(@Param("projectId") int projectId, @Param("userId") int userId);

	@Query("select users from Users users where users.taskId in (:taskIds)")
	List<User> getUsersByTask(@Param("taskIds") List<Integer> taskIds);

	@Query("select users from Users users where users.taskId = :taskIds")
	User getUserByTaskId(@Param("taskIds") Integer taskIds);

	@Query("select users from Users users where users.userId = :userId")
	User findUsersById(@Param("userId") int userId);

	@Query("select users from Users users where users.firstName = :firstName and "
			+ "users.lastName = :lastName and users.employeeId = :employeeId")
	List<User> findUsersByNameandEmpId(@Param("firstName") String firstName, @Param("lastName") String lastName,
			@Param("employeeId") String employeeId);

}