package com.Moments.service;

import com.Moments.exception.CommentException;
import com.Moments.exception.PostException;
import com.Moments.exception.UserException;
import com.Moments.model.Comments;

public interface CommentService {
	
	public Comments createComment(Comments comment,Integer postId,Integer userId) throws PostException, UserException;

	public Comments findCommentById(Integer commentId) throws CommentException;
	public Comments likeComment(Integer CommentId,Integer userId) 
			throws UserException, CommentException;
}
