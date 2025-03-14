package com.SocialMediaApp.Moments.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.SocialMediaApp.Moments.Exceptions.PostException;
import com.SocialMediaApp.Moments.Exceptions.UserException;
import com.SocialMediaApp.Moments.Models.Post;
import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Response.ApiResponse;
import com.SocialMediaApp.Moments.Service.PostService;
import com.SocialMediaApp.Moments.Service.UserService;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/posts")
	public ResponseEntity<Post> createPost(@RequestHeader("Authorization") String jwt, @RequestBody Post post) throws UserException{
		
		User reqUser = userService.findUserByJwt(jwt);
		Post newPost = postService.createNewPost(post, reqUser.getId());
		return new ResponseEntity<>(newPost, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/api/posts/{postId}")
	public ResponseEntity<ApiResponse> deletePost(@RequestHeader("Authorization") String jwt, @PathVariable Integer postId) throws UserException, PostException{
		
		User reqUser = userService.findUserByJwt(jwt);
		String message = postService.deletePost(postId, reqUser.getId());
		ApiResponse response = new ApiResponse(message, true);
		return new ResponseEntity<ApiResponse>(response, HttpStatus.OK);
	}
	
	@GetMapping("/api/posts/{postId}")
	public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postId) throws PostException{
		
		Post post = postService.findPostById(postId);
		return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/api/posts/user/{userId}")
	public ResponseEntity<List<Post>> findUsersPost(@PathVariable Integer userId){
		
		List<Post> posts = postService.findPostByUserId(userId);
		return new ResponseEntity<>(posts, HttpStatus.OK);
	}
	
	@GetMapping("/api/posts")
	public ResponseEntity<List<Post>> findAllPosts(){
		
		List<Post> posts = postService.findAllPost();
		return new ResponseEntity<>(posts, HttpStatus.OK);
	}
	
	@PutMapping("/api/posts/save/{postId}")
	public ResponseEntity<Post> savedPostHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer postId) throws UserException, PostException{
		
		User reqUser = userService.findUserByJwt(jwt);
		Post post = postService.savedPost(postId, reqUser.getId());
		return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
		
	}
	
	@PutMapping("/api/posts/like/{postId}")
	public ResponseEntity<Post> likePostHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer postId) throws UserException, PostException{
		
		User reqUser = userService.findUserByJwt(jwt);
		Post post = postService.likePost(postId, reqUser.getId());
		return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
		
	}
}
