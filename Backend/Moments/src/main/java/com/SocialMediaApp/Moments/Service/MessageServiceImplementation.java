package com.SocialMediaApp.Moments.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SocialMediaApp.Moments.Models.Chat;
import com.SocialMediaApp.Moments.Models.Message;
import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Repository.ChatRepository;
import com.SocialMediaApp.Moments.Repository.MessageRepository;

@Service
public class MessageServiceImplementation implements MessageService{
	
	@Autowired
	private MessageRepository messageRepository;
	
	@Autowired
	private ChatService chatService;
	
	@Autowired
	private ChatRepository chatRepository;

	@Override
	public Message createMessage(User user, Integer chatId, Message req) throws Exception {
		// TODO Auto-generated method stub
		
		Chat chat = chatService.findChatById(chatId);
		
		Message message = new Message();
		message.setChat(chat);
		message.setContent(req.getContent());
		message.setImage(req.getImage());
		message.setUser(user);
		message.setTimeStamp(LocalDateTime.now());
		
		Message savedMessage = messageRepository.save(message);
		
		chat.getMessages().add(savedMessage);
		
		chatRepository.save(chat);
		
		return savedMessage;
	}

	@Override
	public List<Message> findChatsMessages(Integer chatId) throws Exception {
		// TODO Auto-generated method stub
		
		Chat chat = chatService.findChatById(chatId);
		
		return messageRepository.findByChatId(chatId);
	}

}
