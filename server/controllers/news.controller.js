const { fetchNews } = require("../services/news.service");

exports.getNews = async (req, res) => {
  try {
    const { q = "india", page = 1 } = req.query;
    const data = await fetchNews(q, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch news",
      error: error.message
    });
  }
};
