import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="top-nav">
          <div className="nav-left">
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About
            </a>
            <a href="#room-info">Facility</a>
            <a href="#contact-info">Contact</a>
          </div>

          <div className="nav-center">
            <h1 className="brand">Los OLivos Villa</h1>
          </div>

          <div className="nav-right">
            <a
              href="https://www.airbnb.com/rooms/1513066939468971782?photo_id=2398882751&source_impression_id=p3_1762810892_P3cEs9DH4rnDr8Dy&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="reservation-btn">Make a Reservation</button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
