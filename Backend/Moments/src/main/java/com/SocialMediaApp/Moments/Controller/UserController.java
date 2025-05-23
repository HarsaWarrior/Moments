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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SocialMediaApp.Moments.Exceptions.UserException;
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
	public User getUserById(@PathVariable("id") Integer id) throws UserException {
		
		User user = userService.findUserById(id);
		return user;
	}
	
	@PutMapping("/api/users")
	public User updateUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws UserException {
		
		User reqUser = userService.findUserByJwt(jwt);
		User updatedUser = userService.updateUser(user, reqUser.getId());
		return updatedUser;
	}
	
	@PutMapping("/api/users/follow/{userid2}")
	public User followUser(@RequestHeader("Authorization") String jwt, @PathVariable("userid2") Integer id2) throws UserException {
		
		User reqUser = userService.findUserByJwt(jwt);
		User user = userService.followUser(reqUser.getId(), id2);
		return user;
	}
	
	@GetMapping("/api/users/search")
	public List<User> searchUser(@RequestParam("query") String query){
		
		List<User> user = userService.searchUser(query);
		return user;
	}
	
	@GetMapping("/api/users/profile")
	public User getUserFromToken (@RequestHeader("Authorization") String jwt) {
		
		User user = userService.findUserByJwt(jwt);
		
		user.setPassword(null);
		return user;
	}
}
