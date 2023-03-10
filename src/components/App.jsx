import React from "react";

function App() {
  const [hamState, setHamState] = React.useState(false);

  function handleClick() {
    setHamState((prevState) => {
      return !prevState;
    });
  }

  return (
    <div>
      <nav>
        <img src="images/logo.PNG" alt="logo" className="logo-img" />
        {window.innerWidth <= 820 ? (
          <img
            className="hamburger-img"
            src={
              hamState ? "images/icon-close.svg" : "images/icon-hamburger.svg"
            }
            onClick={handleClick}
          />
        ) : (
          <>
            {" "}
            <ul>
              <li>
                <p className="nav-link">Services</p>
              </li>
              <li>
                <p className="nav-link">Projects</p>
              </li>
              <li>
                <p className="nav-link">About</p>
              </li>
            </ul>
            <div className="nav-cta">
              <button className="cta-button">Signup</button>
              <button className="cta-button">Login</button>
            </div>
          </>
        )}
      </nav>
      {hamState ? (
        <div className="modal">
          {" "}
          <ul>
            <li>
              <p className="nav-link">Services</p>
            </li>
            <li>
              <p className="nav-link">Projects</p>
            </li>
            <li>
              <p className="nav-link">About</p>
            </li>
          </ul>
          <div className="modal-cta">
            <button className="cta-button">Signup</button>
            <button className="cta-button">Login</button>
          </div>
        </div>
      ) : (
        false
      )}
      <section className="search-section">
        <div className="search-container">
          <div className="search-text">
            Online freelancing for students done right.
          </div>
        </div>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Job Name" />
            <button className="search-button">
              <img src="images/search.svg" />
            </button>
          </form>
        </div>
      </section>
      <section className="info-section">
        <div className="info-box">
          <img src="images/cert.svg" alt="certification" />
          <div className="info-text">
            <h1>Complete your community service hours online</h1>
            <p>
              Accept jobs posted by small businesses/people and when you
              complete it, you will be given community service hours for your
              work.
            </p>
          </div>
        </div>
        <div className="info-box-2">
          <img src="images/edu.svg" alt="education" />
          <div className="info-text">
            <h1>Work together to complete tasks</h1>
            <p>
              Work with your class to complete tasks together and earn community
              serivce hours online and at home. You are both credited to total
              time of each task.
            </p>
          </div>
        </div>
      </section>
      <section className="subscription">
        <div className="sub-box">
          <div className="sub-top">
            <p className="sub-header-free">Free</p>
            <div className="sub-price">
              <h1>$0</h1>
              <p>/month</p>
            </div>
            <br />
          </div>

          <ul>
            <li>
              <img src="images/check-brown.svg" /> <p>Access to jobs</p>
            </li>
            <li>
              <img src="images/check-brown.svg" /> <p>Track hours</p>
            </li>
            <li>
              <img src="images/check-brown.svg" /> <p>Recieve feedback</p>
            </li>
            <li>
              <img src="images/check-grey.svg" />{" "}
              <p>Early access to listings</p>
            </li>
            <li>
              <img src="images/check-grey.svg" /> <p>High priority posts</p>
            </li>
          </ul>
          <div className="sub-button">Choose Subscription</div>
        </div>
        <div className="sub-box">
          <div className="sub-top">
            <p className="sub-header-paid">Premium</p>
            <div className="sub-price">
              <h1>$15</h1>
              <p>/month</p>
            </div>
            <br />
          </div>
          <ul>
            <li>
              <img src="images/check-brown.svg" /> <p>Access to jobs</p>
            </li>
            <li>
              <img src="images/check-brown.svg" /> <p>Track hours</p>
            </li>
            <li>
              <img src="images/check-brown.svg" /> <p>Recieve feedback</p>
            </li>
            <li>
              <img src="images/check-brown.svg" />{" "}
              <p>Early access to listings</p>
            </li>
            <li>
              <img src="images/check-brown.svg" /> <p>High priority posts</p>
            </li>
          </ul>
          <div className="sub-button">Choose Subscription</div>
        </div>
      </section>
      <section className="sponsors">
        <h1>Sponsors</h1>
        <div>
          <img src="images/airbnb.svg" alt="logo" />
          <img src="images/yamaha.svg" alt="logo" />
          <img src="images/soundcloud.svg" alt="logo" />
          <img src="images/underarmour.svg" alt="logo" />
        </div>
      </section>
      <section className="footer">
        <div className="footer-box">
          {" "}
          <img className="footer-img" src="images/logo.PNG" alt="logo" />
          <ul className="footer-tags">
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-cta">
          <button className="cta-button">Signup</button>
          <button className="cta-button">Login</button>
        </div>
        <p className="footer-copyright">?? 2022 Scholance</p>
      </section>
    </div>
  );
}

export default App;
