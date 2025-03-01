package com.SocialMediaApp.Moments.Service;

import java.util.List;

import com.SocialMediaApp.Moments.Exceptions.PostException;
import com.SocialMediaApp.Moments.Exceptions.UserException;
import com.SocialMediaApp.Moments.Models.Post;

public interface PostService {
	
	Post createNewPost (Post post, Integer userId) throws UserException;
	
	String deletePost (Integer postId, Integer userId) throws UserException, PostException;
	
	List<Post> findPostByUserId (Integer userId);
	
	Post findPostById (Integer postId) throws PostException;
	
	List<Post> findAllPost();
	
	Post savedPost (Integer postId, Integer userId) throws UserException, PostException;
	
	Post likePost (Integer postId, Integer userId) throws UserException, PostException;
}
