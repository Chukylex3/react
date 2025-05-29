import "./Header.css";
import logoimg from "../../assets/logo.png";
import bgimg from "../../assets/header-hero.jpg";

const Header = () => {
  return (
    <div>
      <header className="navbar-section-div">
        <div>
          <img src={logoimg} alt="" width="128px" height="120px" />
        </div>
        <ul className="navlinks-display">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button>202-555-0188</button>
          </li>
        </ul>
      </header>
      {/* <!-- header section ends here -->

    <!-- hero section starts here--> */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <h4>we all love</h4>
        <h2>nature</h2>
        <p>
          Look deep into nature, and you will
          <br />
          understand everything better.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
