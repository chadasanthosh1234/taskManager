package com.cts.taskManager.service.transform;

import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.cts.taskManager.domain.User;
import com.cts.taskManager.service.dto.UserDto;

@Component
public class UserDtoTransform implements Function<UserDto, User> {

	@Override
	public User apply(UserDto t) {
		if (t == null) {
			return null;
		}
		
		User newUser = new User();
		newUser.setFirstName(t.getFirstName());
		newUser.setLastName(t.getLastName());
		newUser.setEmpId(t.getEmpId());

		return newUser;
	}

}
