package com.poc.storyed.feed;

import com.poc.storyed.utils.Mapper;

import java.sql.Timestamp;

public class StoryDTO {

    public StoryDTO() {
    }

    private long id;
    private AuthorDTO author;
    private String content;
    private Timestamp dateCreated;
    private int likesCount;
    private int commentCount;
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public StoryDTO(StoryEntity story) {
        this.id = story.getId();
        this.author = Mapper.transformUserEntityToAuthorDTO(story.getAuthor());
        this.content = story.getContent();
        this.dateCreated = story.getDateCreated();
        this.likesCount = story.getLikesCount();
        this.commentCount = story.getCommentCount();
        this.title = story.getTitle();
    }

    public StoryDTO(long id, AuthorDTO author, String content, Timestamp dateCreated, int likesCount, int commentCount) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.dateCreated = dateCreated;
        this.likesCount = likesCount;
        this.commentCount = commentCount;
    }





    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AuthorDTO getAuthor() {
        return author;
    }

    public void setAuthor(AuthorDTO author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

    public int getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(int likesCount) {
        this.likesCount = likesCount;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }
}
