package com.SocialMediaApp.Moments.Requests;

import com.SocialMediaApp.Moments.Models.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateChatRequest {
	
	private Integer userId;
}
