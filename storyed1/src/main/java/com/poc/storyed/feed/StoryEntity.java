package com.poc.storyed.feed;

import com.poc.storyed.users.UserEntity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "stories")
public class StoryEntity {

    public StoryEntity(){

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "content")
    private String content;

    @OneToOne
    @JoinColumn(name="author_id")
    private UserEntity author;

    @Column(name = "date_created")
    private Timestamp dateCreated;

    @Column(name = "likes_count")
    private int likesCount;

    @Column(name = "comment_count")
    private int commentCount;

    @Column(name = "title")
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UserEntity getAuthor() {
        return author;
    }

    public void setAuthor(UserEntity author) {
        this.author = author;
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
