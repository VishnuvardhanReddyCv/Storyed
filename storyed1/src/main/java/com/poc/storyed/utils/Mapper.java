package com.poc.storyed.utils;

import com.poc.storyed.feed.AuthorDTO;
import com.poc.storyed.feed.StoryDTO;
import com.poc.storyed.feed.StoryEntity;
import com.poc.storyed.users.UserDTO;
import com.poc.storyed.users.UserEntity;
import com.poc.storyed.websecurity.StoryedUser;

public class Mapper {

    public static StoryedUser transformUserEntityToStoryedUser(UserEntity user) {
        return new StoryedUser(user.getEmail(),user.getPassword());
    }

    public static UserDTO transformUserEntityToUserDTO(UserEntity user) {
        return new UserDTO(user);
    }

    public static AuthorDTO transformUserEntityToAuthorDTO(UserEntity user) {
        return new AuthorDTO(user);
    }

    public static StoryDTO transformStoryEntityToStoryDTO(StoryEntity story) {
        return new StoryDTO(story);
    }



}
