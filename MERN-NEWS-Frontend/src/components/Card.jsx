import React from "react";

const NewsCard = ({ article, openArticle }) => {
  const { title, author, published_date, clean_url, excerpt, media } = article;

  const date = new Date(published_date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
   
  return (
    <div className="card" onClick={() => openArticle(article.link)}>
      <div className="card-header">
        <img src={media} alt="news-image" id="news-img" />
      </div>
      <div className="card-content">
        <h3 id="news-title">{title}</h3>
        <h6 className="news-source" id="news-source">
          {author} · {date}
        </h6>
        <p className="news-desc" id="news-desc">
          {excerpt}
        </p>
        <p className="news-source">{clean_url}</p>
      </div>
    </div>
  );
};

export default NewsCard;