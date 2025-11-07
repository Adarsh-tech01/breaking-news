const PermanentNewsBanner = ({ data }) => {
  return (
    // The main div uses fixed positioning to stay at the top
    <div
      style={{
        position: "relative", // Key CSS property: locks the element to the viewport
        top: 0, // Locks it to the top edge
        left: 0, // Locks it to the left edge
        width: "100%", // Ensures it spans the full width
        zIndex: 1000, // Ensures it stacks above all other content
        backgroundColor: "#cc0000", // Red background for urgent news
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        fontSize: "1.1rem",
      }}
    >
      <marquee
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
      >
        <div style={{ display:'flex', justifyContent:'space-around', alignItems: "center",
          gap: "50px"}}>
          <h5>
            <a
              href="https://www.washingtonpost.com/elections/results/2025/11/04/new-jersey-governor-results/"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
             🗳️ New Jersey governor election results 2025 live updates
            </a>
          </h5>

          <h5>
            <a
              href="https://economictimes.indiatimes.com/news/international/us/gold-price-forecast-gold-price-today-touches-3970-is-gold-rate-correction-only-temporary-ubs-gold-price-prediction-eyes-4200-next/articleshow/125112535.cms?from=mdr"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
             💰 Gold price forecast
            </a>
          </h5>
          <h5>
            <a
              href="https://timesofindia.indiatimes.com/sports/cricket/india-women-cricket-team-world-cup-champions-harmanpreet-mandhana-deepti-pm-modi-live-updates/liveblog/125106689.cms"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
            🏆 Indian women’s cricket team meets the Prime Minister after their World Cup victory
            </a>
          </h5>

               <h5>
            <a
              href="https://www.france24.com/en/replay/latest-news"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
           🌍 Latest top stories & headlines from France 24 (international news)
            </a>
          </h5>
        </div>
      </marquee>
    </div>
  );
};

export default PermanentNewsBanner;
