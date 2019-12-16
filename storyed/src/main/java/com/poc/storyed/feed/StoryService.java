package com.poc.storyed.feed;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StoryService {

    public List<StoryDTO> getStories();

    public long postStory(StoryDTO story);

    public void deleteStory(long storyId);

    public StoryDTO updateStory(long storyId, StoryDTO story);
}
