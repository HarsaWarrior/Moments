package com.SocialMediaApp.Moments.Service;

import java.util.List;

import com.SocialMediaApp.Moments.Models.Chat;
import com.SocialMediaApp.Moments.Models.User;

public interface ChatService {
	
	public Chat createChat (User reqUser, User user2);
	
	public Chat findChatById (Integer chatId) throws Exception;
	
	public List<Chat> findUsersChat (Integer userId);
}
