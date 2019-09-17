package com.cts.taskManager.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cts.taskManager.util.User;

@Repository
public interface UserRepository {
	User findById(String Id);

	User addUser(User user);
	
	List<User> findAllUsers();

	List<User> searchUser(User user);
}