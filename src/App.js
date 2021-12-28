import './assets/css/main.css';

function App() {
  return (
    <div>
            <title>Currency Exchange</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Header */}
            <header id="header" className="alt">
              <div className="logo"><a href="index.html">Peer-to-Peer<span> Currency Exchange<span /></span></a></div>
              <a href="#menu">Menu</a>
            </header>
            {/* Nav */}
            <nav id="menu">
              <ul className="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Directions</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </nav>
            {/* Banner */}
            <section className="banner full">
              <article>
                <img src="images/slide01.jpg" alt="" />
                <div className="inner">
                  <header>
                    <p>Free Currency Exchange!</p>
                    <h2>4X Broker</h2>
                  </header>
                </div>
              </article>
              <article>
                <img src="images/Exchange.jpg" alt="" />
                <div className="inner">
                  <header>
                    <p>Use This Service for Free!</p>
                    <h2>Matching Exchange Rates</h2>
                  </header>
                </div>
              </article>
              <article>
                <img src="images/slide02.jpg" alt="" />
                <div className="inner">
                  <header>
                    <p>{/* Once the Pandemic is Over!*/} Forget about the Exchange Rates!</p>
                    <h2>Travel!</h2>
                  </header>
                </div>
              </article>
              <article>
                <img src="images/money.jpg" alt="" />
                <div className="inner">
                  <header>
                    <p>Become a Forex Trader</p>
                    <h2>Gain!</h2>
                  </header>
                </div>
              </article>
              {/* <article>
    					<img src="images/peer-to-peer-network.jpg"  alt="" />
    					<div class="inner">
    						<header>
    							<p>Peer-to-Peer Exchange</p>
    							<h2>No Thrid Party Involvement!</h2>
    						</header>
    					</div>
    				</article> */}
            </section>
            {/* One */}
            <section id="one" className="wrapper style2">
              <div className="inner">
                <div className="grid-style">
                  <div>
                    <div className="box">
                      <div className="image fit">
                        <img src="images/forum.jpg" alt="" />
                      </div>
                      <div className="content">
                        <header className="align-center">
                          <p>The forum is free and open to everyone</p>
                          <h2>Access the Forum</h2>
                        </header>
                        <p> This is where all the desired and expendable currencies are posted. Please remember to add a possible way for people to contact you. Please be as specific as possible. Be sure to mention the currency you wish to trade and how much you will be trading.</p>
                        <footer className="align-center">
                          <a href="#" className="button alt">Click Here to Join the Forum!</a>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="box">
                      <div className="image fit">
                        <img src="images/directions.jpg" alt="" />
                      </div>
                      <div className="content">
                        <header className="align-center">
                          <p>How it works!</p>
                          <h2>Users Manuel</h2>
                        </header>
                        <p> A quick and simple guide to understand how the currency exchange works! Be sure to look at this article before posting on the forum. It speaks to the directions, rules, regulations, benafits and legality behind this Forex trading process.</p>
                        <footer className="align-center">
                          <a href="#" className="button alt">Learn More</a>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Two */}
            <section id="two" className="wrapper style3">
              <div className="inner">
                <header className="align-center">
                  <p>The Best Currency Exchange Rates</p>
                  <h2>Direct Decentralized Forex</h2>
                </header>
              </div>
            </section>
            {/* Three */}
            <section id="three" className="wrapper style2">
              <div className="inner">
                <header className="align-center">
                  <p className="special">Our Users Have Never Been Happier!</p>
                  <h2>User Reviews!</h2>
                </header>
                <div className="gallery">
                  <div>
                    <div className="image fit">
                      <a href="#"><img src="images/pic01.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit">
                      <a href="#"><img src="images/pic02.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit">
                      <a href="#"><img src="images/pic03.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit">
                      <a href="#"><img src="images/pic04.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Footer */}
            <footer id="footer">
              <div className="container">
                <ul className="icons">
                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
              </div>
              <div className="copyright">
                © Forex. All rights reserved.
              </div>
            </footer>
          </div>
  );
}

export default App;
