package com.cts.taskManager.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.taskManager.domain.User;
import com.cts.taskManager.repositories.UserRepository;
import com.cts.taskManager.service.UserService;
import com.cts.taskManager.service.dto.UserDto;
import com.cts.taskManager.service.transform.UserDtoTransform;
import com.cts.taskManager.service.transform.UserTransform;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDtoTransform userDtoTransform;

	@Autowired
	private UserTransform userTransform;

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDto createUser(UserDto user) {

		User newUser = userDtoTransform.apply(user);

		User savedUser = userRepository.save(newUser);
		return userTransform.apply(savedUser);

	}

	@Override
	public List<UserDto> getUsers() {

		return StreamSupport.stream(userRepository.findAll().spliterator(), false).map(userTransform)
				.collect(Collectors.toList());

	}

	@Override
	public UserDto findById(int id) {
		User foundUser = userRepository.findById(id).orElse(null);
		UserDto result = null;
		if (foundUser != null) {
			result = userTransform.apply(foundUser);
		}
		return result;
	}

	@Override
	public UserDto update(UserDto user, int id) {

		User userRecord = userRepository.findById(id).orElse(null);
		if (userRecord == null) {
			throw new ValidationException("Unable to find user with id " + id);
		}
		userRecord.setEmpId(user.getEmpId());
		userRecord.setFirstName(user.getFirstName());
		userRecord.setLastName(user.getLastName());
		return userTransform.apply(userRepository.save(userRecord));
	}

	@Override
	public void deleteUserById(int id) {
		userRepository.deleteById(id);

	}

}
