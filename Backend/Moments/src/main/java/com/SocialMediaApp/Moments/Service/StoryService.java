package com.SocialMediaApp.Moments.Service;

import java.util.List;


import com.SocialMediaApp.Moments.Models.Story;
import com.SocialMediaApp.Moments.Models.User;

public interface StoryService {
	
	public Story createStory (Story story, User user);
	
	public List<Story> findStoryByUserId (Integer userId) throws Exception;
}
