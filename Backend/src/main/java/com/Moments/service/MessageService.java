package com.Moments.service;

import java.util.List;

import com.Moments.exception.ChatException;
import com.Moments.exception.MessageException;
import com.Moments.exception.UserException;
import com.Moments.model.Message;
import com.Moments.request.SendMessageRequest;

public interface MessageService  {
	
	public Message sendMessage(SendMessageRequest req) throws UserException, ChatException;
	
	public List<Message> getChatsMessages(Integer chatId) throws ChatException;
	
	public Message findMessageById(Integer messageId) throws MessageException;
	
	public String deleteMessage(Integer messageId) throws MessageException;

}
