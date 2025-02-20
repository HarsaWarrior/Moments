package com.SocialMediaApp.Moments.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Repository.UserRepository;
import com.SocialMediaApp.Moments.Service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/api/users")
	public List<User> getUsers(){
		List<User> users =  userRepository.findAll();
		return users;
	}
	
	@GetMapping("/api/user/{id}")
	public User getUserById(@PathVariable("id") Integer id) throws Exception {
		
		User user = userService.findUserById(id);
		return user;
	}
	
	@PutMapping("/api/users/{userid}")
	public User updateUser(@PathVariable Integer userid, @RequestBody User user) throws Exception {
		
		User updatedUser = userService.updateUser(user, userid);
		return updatedUser;
	}
	
	@PutMapping("/api/users/follow/{userid1}/{userid2}")
	public User followUser(@PathVariable("userid1") Integer id1, @PathVariable("userid2") Integer id2) throws Exception {
		
		User user = userService.followUser(id1, id2);
		return user;
	}
	
	@GetMapping("/api/users/search")
	public List<User> searchUser(@RequestParam("query") String query){
		
		List<User> user = userService.searchUser(query);
		return user;
	}
	
}
