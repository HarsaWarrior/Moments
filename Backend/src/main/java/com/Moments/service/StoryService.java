package com.Moments.service;

import java.util.List;

import com.Moments.exception.StoryException;
import com.Moments.exception.UserException;
import com.Moments.model.Story;

public interface StoryService {

	public Story createStory(Story story,Integer userId) throws UserException;
	
	public List<Story> findStoryByUserId(Integer userId) throws UserException, StoryException;
	
	
}
