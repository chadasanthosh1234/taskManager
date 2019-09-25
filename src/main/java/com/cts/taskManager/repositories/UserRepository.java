package com.cts.taskManager.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.taskManager.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}