package com.cts.taskManager.service.transform;

import java.util.function.Function;

import com.cts.taskManager.domain.User;
import com.cts.taskManager.service.dto.UserDto;

public class UserTransform implements Function<User, UserDto> {

	@Override
	public UserDto apply(User t) {
		if (t == null) {
			return null;
		}
		
		UserDto newUser = new UserDto();
		newUser.setUserId(t.getUserId());
		newUser.setEmpId(t.getEmpId());
		newUser.setFirstName(t.getFirstName());
		newUser.setLastName(t.getLastName());

		return newUser;
	}

}