package com.poc.storyed.utils;

import com.poc.storyed.users.UserEntity;
import com.poc.storyed.websecurity.StoryedUser;

public class Mapper {

    public static StoryedUser transformUserEntityStoryedUser(UserEntity user) {
        return new StoryedUser(user.getEmail(),user.getPassword());
    }

}
