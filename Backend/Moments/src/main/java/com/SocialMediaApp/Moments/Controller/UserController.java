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
import org.springframework.web.bind.annotation.RestController;

import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Repository.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		List<User> users =  userRepository.findAll();
		return users;
	}
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") Integer id) throws Exception {
		
		Optional<User> user = userRepository.findById(id);
		
		if(user.isPresent()) {
			return user.get();
		}
		
		throw new Exception("User Not Found for the given id "+id);
	}
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}
	
	@PutMapping("/users/{userid}")
	public User updateUser(@PathVariable Integer userid, @RequestBody User user) throws Exception {
		
		Optional<User> user1 = userRepository.findById(userid);
		
		if(user1.isEmpty()) {
			throw new Exception("User Not Found for the given id "+userid);
		}
		
		User oldUser = user1.get();
		
		if(user.getFirstName() != null) {
			oldUser.setFirstName(user.getFirstName());
		}
		
		if(user.getEmail() != null) {
			oldUser.setEmail(user.getEmail());
		}
		
		if(user.getLastName() != null) {
			oldUser.setLastName(user.getLastName());
		}
		
		User updatedUser = userRepository.save(oldUser);
		
		return updatedUser;
	}
	
	@DeleteMapping("users/{userid}")
	public String deleteUser(@PathVariable("userid") Integer userId) throws Exception {
		Optional<User> user = userRepository.findById(userId);
		
		if(user.isEmpty()) {
			throw new Exception("User Not Found for the given id "+userId);
		}
		
		userRepository.delete(user.get());
		
		return "User successfully deleted for the Id "+userId;
	}
}
