package com.SocialMediaApp.Moments.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.SocialMediaApp.Moments.Models.Chat;
import com.SocialMediaApp.Moments.Models.Message;
import com.SocialMediaApp.Moments.Models.User;

public interface MessageService {
	
	public Message createMessage(User user, Integer chatId, Message req) throws Exception;
	
	public List<Message> findChatsMessages (Integer chatId) throws Exception;
}
