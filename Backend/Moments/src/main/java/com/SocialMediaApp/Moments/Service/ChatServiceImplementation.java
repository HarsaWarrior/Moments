package com.SocialMediaApp.Moments.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SocialMediaApp.Moments.Exceptions.ChatException;
import com.SocialMediaApp.Moments.Models.Chat;
import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Repository.ChatRepository;

@Service
public class ChatServiceImplementation implements ChatService{
	
	@Autowired
	private ChatRepository chatRepository;

	@Override
	public Chat createChat(User reqUser, User user2) {
		// TODO Auto-generated method stub
		Chat isExist = chatRepository.findChatByUsersId(user2, reqUser);
		
		if(isExist != null) {
			return isExist;
		}
		
		Chat chat = new Chat();
		chat.getUsers().add(user2);
		chat.getUsers().add(reqUser);
		chat.setTimeStamp(LocalDateTime.now());
		
		return chatRepository.save(chat);
	}

	@Override
	public Chat findChatById(Integer chatId) throws ChatException {
		// TODO Auto-generated method stub
		
		Optional<Chat> chat = chatRepository.findById(chatId);
		if(chat.isEmpty()) {
			throw new ChatException("Chat not found with id - "+chatId);
		}
		return chat.get();
	}

	@Override
	public List<Chat> findUsersChat(Integer userId) {
		// TODO Auto-generated method stub
		return chatRepository.findByUsersId(userId);
	}

}
