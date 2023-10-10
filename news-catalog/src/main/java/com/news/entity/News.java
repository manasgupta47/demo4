package com.news.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="news")
public class News {
@Id
private String newsId;
private String newsTitle;
private String newsDescription;
private String newsContent;
private String newsPublishDate;
private String newsImage;
public News(String newsId, String newsTitle, String newsDescription, String newsContent, String newsPublishDate, String newsImage) {
	super();
	this.newsId = newsId;
	this.newsTitle = newsTitle;
	this.newsDescription = newsDescription;
	this.newsContent = newsContent;
	this.newsPublishDate = newsPublishDate;
	this.newsImage = newsImage;
}
public String getNewsImage() {
	return newsImage;
}
public void setNewsImage(String newsImage) {
	this.newsImage = newsImage;
}
public String getNewsId() {
	return newsId;
}
public void setNewsId(String newsId) {
	this.newsId = newsId;
}
public String getNewsTitle() {
	return newsTitle;
}
public void setNewsTitle(String newsTitle) {
	this.newsTitle = newsTitle;
}
public String getNewsDescription() {
	return newsDescription;
}
public void setNewsDescription(String newsDescription) {
	this.newsDescription = newsDescription;
}
public String getNewsContent() {
	return newsContent;
}
public void setNewsContent(String newsContent) {
	this.newsContent = newsContent;
}
public String getNewsPublishDate() {
	return newsPublishDate;
}
public void setNewsPublishDate(String newsPublishDate) {
	this.newsPublishDate = newsPublishDate;
}

}
