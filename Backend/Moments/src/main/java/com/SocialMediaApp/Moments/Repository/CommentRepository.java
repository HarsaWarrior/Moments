package com.SocialMediaApp.Moments.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SocialMediaApp.Moments.Models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{

}
