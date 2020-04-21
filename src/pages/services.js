import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const services = (props) => (
  <Layout>
    <Helmet>
      <title>Services - Micah</title>
      <meta name="description" content="services Page" />
    </Helmet>

    <BannerServices />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Website Development</h2>
          </header>
          <p>I'm your guy for website design and development.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/wp" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Wordpress</h3>
              </header>
              <p>This is a good option for a simple, affordable website that doesn't take long to develop.</p>
              <ul className="actions">
                <li><Link to="/wp" className="button">Learn more</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/wp" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>React Mobile First Webpage</h3>
              </header>
              <p>For more substantial websites, I prefer to use React to develop a mobile first app for all your needs.</p>
              <ul className="actions">
                <li><a target="_blank" href="http://wishbonetech.com/" rel="noopener noreferrer" className="button">More Info</a></li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
          <Link to="/wp" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
              <ul className="actions">
                <li><Link to="/wp" className="button">Learn more</Link></li>
              </ul>
            </div>
          </div>
        </section> */}
      </section>
    </div>

  </Layout>
)

export default services