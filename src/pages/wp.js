import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const WP = (props) => (
  <Layout>
    <Helmet>
      <title>Wordpress - Micah</title>
      <meta name="description" content="WP Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Wordpress Websites</h1>
          </header>
          <span className="image main"><img src={pic11} alt="" /></span>
          <p>Wordpress is a great way to qucikly make an affordable website. </p>
          <h5>Wordpress Portfolio</h5>
          <ul className="actions">
            <li><a target="_blank" href="http://co2dynamics.com/" rel="noopener noreferrer">CO2 Dynamics</a></li>
          </ul>
        </div>
      </section>
    </div>

  </Layout>
)

export default WP