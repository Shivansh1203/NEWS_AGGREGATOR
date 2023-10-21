import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewsCard from "./Card";

// const API_KEY = "49923d432c0d4155abcc54918f2aeeb6";
const url = "";

const App = () => {
  const [articless, setArticles] = useState([]);
  const [selectedNav, setSelectedNav] = useState(null);

  useEffect(() => {
    fetchNews("India");
  }, []);

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ''
      }
    });
    const data = await res.json();
    if (data.status === 'ok') {
      bindData(data.articles);
    } else {
      console.error('Failed to fetch news:', data.message);
    }
  };
   
  const bindData=(articles) =>{
    setArticles(articles);
  }
  const reload = () => {
    window.location.reload();
  };

  const openArticle = (url) => {
    window.open(url, "_blank");
  };

  const onNavItemClick = (id) => {
    fetchNews(id);
    setSelectedNav(id);
  };

  const onSearchButtonClick = (query) => {
    if (!query) return;
    fetchNews(query);
    setSelectedNav(null);
  };

  return (
    <>
      <Navbar
        reload={reload}
        onNavItemClick={onNavItemClick}
        onSearchButtonClick={onSearchButtonClick}
      />
      <main>
        <div className="cards-container container flex">
        {articless && articless.map((article) => (
  <NewsCard
    key={article._id}
    article={article}
    openArticle={openArticle}
  />
))}
        </div>
      </main>
    </>
  );
};

export default App;
