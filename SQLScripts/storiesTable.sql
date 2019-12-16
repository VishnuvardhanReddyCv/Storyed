CREATE TABLE `storyed`.`stories` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL,
  `date_created` TIMESTAMP NOT NULL,
  `author_id` BIGINT NOT NULL,
  `likes_count` INT NULL,
  `date_modified` TIMESTAMP NOT NULL,
  `comment_count` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `author_id_fk_idx` (`author_id` ASC),
  CONSTRAINT `author_id_fk`
    FOREIGN KEY (`author_id`)
    REFERENCES `storyed`.`Authors` (`id`)
);

