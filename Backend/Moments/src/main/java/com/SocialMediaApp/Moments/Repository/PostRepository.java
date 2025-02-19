package com.SocialMediaApp.Moments.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.SocialMediaApp.Moments.Models.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{
	
	@Query("SELECT p from Post p WHERE p.user.id=:userId")
	List<Post> findPostByUserId(Integer userId);
}
