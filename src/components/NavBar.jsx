
export const NavBar = ({ setCategory }) => {
  const famousCitiesOfIndia = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Jaipur",
  "Ahmedabad",
  "Pune",
  "Varanasi"
];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => setCategory("general")}>
            <span className="badge bg-dark text-light fs-4"> NEWS ADDA</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <select className="form-select" aria-label="Select City">
                  <option selected >Select city for news</option>
                  {
                    famousCitiesOfIndia.map((city,idx) => {
                      return (
                        <option value={city} key={idx}>{city} </option>
                      )
                    })
                  }
              </select>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("general")}
                >
                  General
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("business")}
                >
                  Bussiness
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("entertainment")}
                >
                  Enterainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("health")}
                >
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("science")}
                >
                  Science
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-info mx-2 "
                  style={{ border: "none" }}
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
