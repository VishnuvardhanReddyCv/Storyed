package com.poc.storyed.feed;

import com.google.common.collect.Lists;
import com.poc.storyed.utils.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StoryDAOImpl implements StoryDAO {
    @Autowired
    private StoryRepository storyRepository;

    private ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<StoryDTO> getStories() {
        List<StoryDTO> stories = new ArrayList<>();
        List<StoryEntity> storiesMap = Lists.newArrayList(storyRepository.findAll());
        storiesMap.forEach(storyEntity -> stories.add(Mapper.transformStoryEntityToStoryDTO(storyEntity)));
        return stories;
    }

    @Override
    public long postStory(StoryDTO story) {
        return storyRepository.save(modelMapper.map(story,StoryEntity.class)).getId();
    }

    @Override
    public void deleteStory(long storyId) {
        storyRepository.deleteById(storyId);
    }

    @Override
    public StoryDTO updateStory(long storyId, StoryDTO story) {
        StoryEntity storyFromDb = storyRepository.findById(storyId).get();
        modelMapper.map(storyFromDb,story);
        return modelMapper.map(storyRepository.save(storyFromDb),StoryDTO.class);
    }
}
