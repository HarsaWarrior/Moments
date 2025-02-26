package com.SocialMediaApp.Moments.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SocialMediaApp.Moments.Models.Message;

public interface MessageRepository extends JpaRepository<Message, Integer>{
	
	public List<Message> findByChatId(Integer chatId);
}
