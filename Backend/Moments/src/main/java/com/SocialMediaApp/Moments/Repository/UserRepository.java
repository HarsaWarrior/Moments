package com.SocialMediaApp.Moments.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.SocialMediaApp.Moments.Models.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	
	public User findByEmail(String email);
	
	@Query("SELECT user from User user WHERE user.firstName LIKE %:query% OR user.lastName LIKE %:query% OR user.email LIKE %:query%")
	public List<User> searchUser(@Param("query") String query);
}
