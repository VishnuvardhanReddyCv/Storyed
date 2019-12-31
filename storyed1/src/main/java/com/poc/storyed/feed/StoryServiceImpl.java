package com.poc.storyed.feed;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryDAO storyDAO;

    private ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<StoryDTO> getStories() {
        return storyDAO.getStories();
    }

    @Override
    public long postStory(StoryDTO story) {
        return storyDAO.postStory(story);
    }

    @Override
    public void deleteStory(long storyId) {
        storyDAO.deleteStory(storyId);
    }

    @Override
    public StoryDTO updateStory(long storyId, StoryDTO story) {
        return storyDAO.updateStory(storyId,story);
    }
}
