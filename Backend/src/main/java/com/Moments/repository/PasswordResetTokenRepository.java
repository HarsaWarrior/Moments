package com.Moments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Moments.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {

	PasswordResetToken findByToken(String token);

}
