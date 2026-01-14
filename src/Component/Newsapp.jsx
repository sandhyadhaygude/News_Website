import React, { useState, useEffect } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/news?q=${search}`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    getData();
  };

  return (
    <div className="app">
      <nav>
        <h1>📰 Trending News</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News..."
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <p className="head">Stay Updated with TrendyNews</p>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      {newsData ? <Card data={newsData} /> : <p className="loading">Loading...</p>}
    </div>
  );
};

export default Newsapp;
