package com.cts.taskManager.repositories;

import java.util.List;
import com.cts.taskManager.util.User;

public interface UserRepository {
	User findById(String Id);

	User addUser(User user);
	
	List<User> findAllUsers();

	List<User> searchUser(User user);
}