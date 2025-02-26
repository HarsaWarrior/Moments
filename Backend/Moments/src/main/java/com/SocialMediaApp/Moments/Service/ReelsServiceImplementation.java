package com.SocialMediaApp.Moments.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SocialMediaApp.Moments.Models.Reels;
import com.SocialMediaApp.Moments.Models.User;
import com.SocialMediaApp.Moments.Repository.ReelsRepository;

@Service
public class ReelsServiceImplementation implements ReelsService{
	
	@Autowired
	ReelsRepository reelsRepository;
	
	@Autowired
	UserService userService;

	@Override
	public Reels createReel(Reels reel, User user) {
		// TODO Auto-generated method stub
		
		Reels createReel = new Reels();
		
		createReel.setTitle(reel.getTitle());
		createReel.setUser(user);
		createReel.setVideo(reel.getVideo());
		
		return reelsRepository.save(createReel);
	}

	@Override
	public List<Reels> findAllReels() {
		// TODO Auto-generated method stub
		return reelsRepository.findAll();
	}

	@Override
	public List<Reels> findUsersReel(Integer userId) throws Exception {
		// TODO Auto-generated method stub
		User user = userService.findUserById(userId);
		return reelsRepository.findByUserId(userId);
	}

}
