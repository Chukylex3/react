import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <main className="main-section2-div">
        <h1>Our Services</h1>

        {/* <!-- section-2-div starts here --> */}

        <div className="section2-div">
          <div>
            <div className="main-section-display">
              <img src="./images/service-1.jpg" alt="img" />
            </div>
            <h2>Web Design</h2>
            <p>
              Focus on how you can help and benefit <br />
              your user. Use simple words so that you <br />
              don't confuse people.
            </p>
          </div>

          <div>
            <div className="main-section-display">
              <img src="./images/service-2.jpg" alt="img" />
            </div>
            <h2>Graphic Design</h2>
            <p>
              Focus on how you can help and benefit <br />
              your user. Use simple words so that you <br />
              don't confuse people.
            </p>
          </div>

          <div>
            <div className="main-section-display">
              <img src="./images/service-3.jpg" alt="img" />
            </div>
            <h2>Content Creation</h2>
            <p>
              Focus on how you can help and benefit <br />
              your user. Use simple words so that you <br />
              don't confuse people.
            </p>
          </div>
        </div>
        {/* <!-- section2-div ends here --> */}

        {/* <!-- main-section3-div starts here --> */}

        <div className="main-section3-div">
          <div className="quote-tag">
            <img
              src="./images/quotes.svg"
              alt="img"
              width="30vh"
              height="30vh"
            />
          </div>
          <p>
            “Original and with an innate understanding of <br />
            their customer’s needs, the team at Love Nature <br />
            are always a pleasure to work with.”
          </p>
          <div>
            <img
              src="./images/miller image.png"
              alt="img"
              width="50px"
              height="50px"
            />
          </div>
          <h5>Jane Miller</h5>
        </div>
        {/* <!-- main-section3-div ends here --> */}

        {/* <!-- main-section4-div starts here --> */}
        <div className="main-section4-div">
          <div className="sub-section">
            <h5>ABOUT US</h5>
            <h3>
              Tell website visitors who you are and why they should choose your
              business.
            </h3>
            <p>
              Because when a visitor first lands on your website, you’re a
              stranger to them. They have to get to know you in order to want to
              read your blog posts, subscribe to your email newsletter, or buy
              what <br />
              you’re selling.
            </p>
            <button>Find Out More</button>
          </div>
          <div className="img-div">
            <img src="./images/leaf.jpg" alt="img" />
          </div>
        </div>
        {/* <!-- main-section4-div ends here --> */}

        {/* <!-- main-section5-div starts here --> */}
        <div className="main-section5-div">
          <h2>QUESTIONS?</h2>
          <p>
            Whether you're curious about features, a free trial, or <br />
            even press, we’re here to answer any questions.
          </p>
          <button>Let's Talk Now</button>
        </div>
        {/* <!-- main-section5-div ends here --> */}

        {/* <!-- footer-div starts here --> */}
        <footer className="navbar-footer-div">
          <ul className="navbar-footer-list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div className="footer-logo-navsection">
            <img
              src="./images/logo-green.svg"
              alt="img"
              width="60"
              height="50"
            />
          </div>
          <p className="p-list">Love Nature by Tyler Moore</p>
        </footer>
        {/* <!-- footer div ends here --> */}
      </main>
    </div>
  );
};

export default Services;
