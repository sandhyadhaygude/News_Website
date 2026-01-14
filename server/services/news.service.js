const axios = require("axios");

exports.fetchNews = async (query, page) => {
  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      q: query,
      page,
      pageSize: 10,
      apiKey: process.env.NEWS_API_KEY
    }
  });

  return response.data;
};

