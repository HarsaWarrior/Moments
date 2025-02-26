package com.SocialMediaApp.Moments.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SocialMediaApp.Moments.Models.Story;

public interface StoryRepository extends JpaRepository<Story, Integer> {
	
	public List<Story> findByUserId(Integer userId);
}
