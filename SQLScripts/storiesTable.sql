CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(500) NOT NULL,
  `middle_name` varchar(500) DEFAULT NULL,
  `last_name` varchar(500) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `city` varchar(500) DEFAULT NULL,
  `mobile_number` bigint(20) NOT NULL,
  `email` varchar(500) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `password` char(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
)


CREATE TABLE `stories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author_id` bigint(20) NOT NULL,
  `likes_count` int(11) DEFAULT NULL,
  `date_modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_count` int(11) DEFAULT NULL,
  `title` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id_fk_idx` (`author_id`),
  CONSTRAINT `author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
)



CREATE TABLE `Notifications` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `expiry_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_read` char(1) NOT NULL,
  `on_story_id` bigint(20) NOT NULL,
  `to_author_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Notifications_story_idx` (`on_story_id`),
  KEY `fk_Notifications_author_idx` (`to_author_id`),
  CONSTRAINT `fk_Notifications_author` FOREIGN KEY (`to_author_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Notifications_story` FOREIGN KEY (`on_story_id`) REFERENCES `stories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) 
