const Card = ({ data }) => {
  if (!data) {
    return <p className="loading">Loading News...</p>;
  }

  const readMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => (
        <div className="card" key={index}>
          <img
            src={curItem.urlToImage || "https://via.placeholder.com/300"}
            alt="News"
          />
          <div className="content">
            <h3 className="title" onClick={() => readMore(curItem.url)}>
              {curItem.title}
            </h3>
            <p>{curItem.description}</p>
            <button onClick={() => readMore(curItem.url)}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
