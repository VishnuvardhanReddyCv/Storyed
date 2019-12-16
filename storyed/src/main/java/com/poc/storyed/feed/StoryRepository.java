package com.poc.storyed.feed;

import com.poc.storyed.Entities.StoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryRepository extends JpaRepository<StoryEntity, Long> {
}
