package com.Moments.service;

import java.util.List;

import com.Moments.exception.UserException;
import com.Moments.model.Reels;
import com.Moments.model.User;

public interface ReelsService {
	
	public Reels createReel(Reels reel,User user);
	public List<Reels> findAllReels();
	public List<Reels> findUsersReel(Integer userId) throws UserException;

}
