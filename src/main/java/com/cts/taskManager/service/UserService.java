package com.cts.taskManager.service;

import java.util.List;

import com.cts.taskManager.service.dto.UserDto;

public interface UserService {

	public UserDto createUser(UserDto user);

	public List<UserDto> getUsers();

	public UserDto findById(int id);

	public UserDto update(UserDto user, int id);

	public void deleteUserById(int id);

}
