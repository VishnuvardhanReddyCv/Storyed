package com.poc.storyed.feed;

import java.util.List;

public interface StoryDAO {

    public List<StoryDTO> getStories();

    public long postStory(StoryDTO story);

    public void deleteStory(long storyId);

    public StoryDTO updateStory(long storyId, StoryDTO story);

}
