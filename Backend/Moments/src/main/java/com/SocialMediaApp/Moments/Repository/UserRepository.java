package com.SocialMediaApp.Moments.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SocialMediaApp.Moments.Models.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	
}
