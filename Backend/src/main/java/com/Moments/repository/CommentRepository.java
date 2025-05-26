package com.Moments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Moments.model.Comments;


public interface CommentRepository extends JpaRepository<Comments, Integer> {

}
