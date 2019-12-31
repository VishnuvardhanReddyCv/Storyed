package com.poc.storyed.feed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/stories")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @GetMapping("")
    public ResponseEntity<List<StoryDTO>> getStories() {
        return ResponseEntity.ok(storyService.getStories());
    }

    @PostMapping("/post")
    public ResponseEntity<?> postStory(@RequestBody StoryDTO story) {
        return ResponseEntity.ok(storyService.postStory(story));
    }


    @GetMapping("/test")
    public String test(){
        return "great";
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<?> deleteStory(@PathVariable("id") long storyId) {
       storyService.deleteStory(storyId);
       return ResponseEntity.ok("Success");
    }


    @PostMapping("/{id}/update")
    public ResponseEntity<?> updateStory(@PathVariable("id") long storyId,@RequestBody  StoryDTO story) {
        return ResponseEntity.ok(storyService.updateStory(storyId,story));
    }


}
