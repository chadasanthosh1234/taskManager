package com.cts.taskManager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.taskManager.repositories.UserRepository;
import com.cts.taskManager.util.User;


@RestController
public class UserController {

	@Autowired
    UserRepository userRepository;
	
	@RequestMapping(method=RequestMethod.GET, value="/users")
    public Iterable<User> users() {
        return userRepository.findAllUsers();
    }

	@RequestMapping(method=RequestMethod.POST, value="/users")
    public User saveUser(@RequestBody User user) {
        userRepository.addUser(user);
        return user;
    }
	
	@RequestMapping(method=RequestMethod.GET, value="/users/{id}")
    public User showUser(@PathVariable String employeeId) {
        return userRepository.findById(employeeId);
    }
	
	@RequestMapping(method=RequestMethod.POST, value="/users/{id}")
    public User updateUser(@PathVariable String employeeId, @RequestBody User user) {
        User c = userRepository.findById(employeeId);
        if(user.getFirstName() != null)
            c.setFirstName(user.getFirstName());
        if(user.getLastName() != null)
            c.setLastName(user.getLastName());
        if(user.getProjectId() != null)
            c.setProjectId(user.getProjectId());
        if(user.getTaskId() != null)
            c.setTaskId(user.getTaskId());
        userRepository.addUser(c);
        return user;
    }
	
}
