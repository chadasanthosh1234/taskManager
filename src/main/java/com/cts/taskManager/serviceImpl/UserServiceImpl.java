package com.cts.taskManager.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.StringUtils;

import com.cts.taskManager.repositories.UserRepository;
import com.cts.taskManager.util.User;

public class UserServiceImpl implements UserRepository{

	@Autowired
    private MongoTemplate mongoTemplate;
    
    //private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	@Override
	public User findById(String employeeId) {
		Query query = new Query();
        query.addCriteria(Criteria.where("employeeId").is(employeeId));
        return mongoTemplate.findOne(query, User.class);
	}

	@Override
	public User addUser(User user) {
		return mongoTemplate.save(user);
	}

	@Override
	public List<User> findAllUsers() {
		return mongoTemplate.findAll(User.class);
	}

	@Override
	public List<User> searchUser(User user) {
		Query query = new Query();

		if (!StringUtils.isEmpty(user.getFirstName())) {
			query.addCriteria(Criteria.where("firstName").is(user.getFirstName()));
				
		}

		if (!StringUtils.isEmpty(user.getLastName())) {
			query.addCriteria(Criteria.where("lastName").is(user.getLastName()));
		}

		if (!StringUtils.isEmpty(user.getEmployeeId())) {
			query.addCriteria(Criteria.where("employeeId").is(user.getEmployeeId()));
		}
		

		return mongoTemplate.find(query, User.class);
	}

	public void deleteUser(User user) {
		mongoTemplate.remove(user);
	}

}
