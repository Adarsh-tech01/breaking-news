const NewsItem = ({ title, description, src, url }) => {
  return (
    <>
      {/* <div
        className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-2 py-2"
        style={{ maxWidth: "330px" }}
      >
        <img
          src={src ? src : "/news.jpg"}
          style={{
            height: "200px",
            width: "270px",
            display: "flex",
            margin: "auto",
          }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "Bringing you up-to-date news, trending topics, and insights across every category and interest."}
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div> */}

      <iframe src={url} title={title} style={{height:'100vh',width:'100vw',display:'fixed',marginTop:50,border:'2px solid black'}} />
    </>
  );
};

export default NewsItem;
