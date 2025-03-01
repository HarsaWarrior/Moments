package com.SocialMediaApp.Moments.Service;

import com.SocialMediaApp.Moments.Exceptions.CommentException;
import com.SocialMediaApp.Moments.Exceptions.PostException;
import com.SocialMediaApp.Moments.Exceptions.UserException;
import com.SocialMediaApp.Moments.Models.Comment;

public interface CommentService {
	
	public Comment createComment(Comment comment, Integer postId, Integer userId) throws UserException, PostException;
	
	public Comment findCommentById (Integer commentId) throws CommentException;
	
	public Comment likeComment (Integer commentId, Integer userId) throws CommentException, UserException;
}
