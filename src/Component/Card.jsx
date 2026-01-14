const Card = ({ data }) => {
  if (!data) {
    return <p style={{ textAlign: "center" }}>Loading News...</p>;
  }
  const readMore = (url) => {
    window.open(url);
  };
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => (
        <div className="card" key={index}>
          <img src={curItem.urlToImage} alt="News" />
          <div className="content">
            <a className="title" onClick={() => readMore(curItem.url)}>
              {curItem.title}
            </a>
            <p>{curItem.description}</p>
            <button onClick={() => readMore(curItem.url)}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
