package com.Moments.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Moments.exception.ChatException;
import com.Moments.exception.MessageException;
import com.Moments.exception.UserException;
import com.Moments.model.Chat;
import com.Moments.model.Message;
import com.Moments.model.User;
import com.Moments.repository.ChatRepository;
import com.Moments.repository.MessageRepository;
import com.Moments.request.SendMessageRequest;

@Service
public class MessageServiceImplement implements MessageService{
	
	@Autowired
	private MessageRepository messageRepo;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ChatService chatService;
	
	@Autowired
	private ChatRepository chatRepository;
	
	  

	@Override
	public Message sendMessage(SendMessageRequest req) throws UserException, ChatException {
		
		System.out.println("send message ------- ");
		
		User user=userService.findUserById(req.getUserId());
		Chat chat=chatService.findChatById(req.getChatId());
		
		Message message=new Message();
		message.setChat(chat);
		message.setUser(user);
		message.setContent(req.getContent());
		message.setTimeStamp(LocalDateTime.now());
		message.setIs_read(false);
		message.setImage(req.getImage());
		
		
		Message savedMessage=messageRepo.save(message);
		
		chat.getMessages().add(savedMessage);
		
		
		chatRepository.save(chat);
		return savedMessage;
	}

	@Override
	public String deleteMessage(Integer messageId) throws MessageException {
		
		Message message=findMessageById(messageId);
		
		messageRepo.deleteById(message.getId());
		
		return "message deleted successfully";
	}

	@Override
	public List<Message> getChatsMessages(Integer chatId) throws ChatException {
		
		Chat chat=chatService.findChatById(chatId);
		
		List<Message> messages=messageRepo.findMessageByChatId(chatId);
		
		return messages;
	}

	@Override
	public Message findMessageById(Integer messageId) throws MessageException {
		
		Optional<Message> message =messageRepo.findById(messageId);
		
		if(message.isPresent()) {
			return message.get();
		}
		throw new MessageException("message not exist with id "+messageId);
	}

}
