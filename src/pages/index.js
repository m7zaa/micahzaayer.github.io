import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {




    return (
      <Layout>
        <Helmet
          title="Micah Zaayer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Wordpress</h3>
                <p>Quick websites made to fit all your needs</p>
              </header>
              <Link to="/wp" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Mobile First Custom Websites</h3>
                <p>Whether you need a mobile app or just a more complex website, check me out at Wishbone Tech</p>
              </header>
              {/* <Link href="http://wishbonetech.com/" className="link primary"><a href="http://wishbonetech.com/" rel="noopener noreferrer"></a></Link> */}

              <a href="http://wishbonetech.com/" rel="noopener noreferrer" className="link primary"></a>
            </article>
            {/* <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article> */}


          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About Micah</h2>
              </header>
              <p>Micah has a background in cannabis retail, operating Oregon's first multi-licensed dispensaries for nearly 5 years. He now focuses on web development and helping companies improve their online presence through innovative thinking. Along with tech, his hobbies include collecting minerals, tinkering with his motorcycle and the continuous search for the best slice of pizza.</p>
              <ul className="actions">
                <li><Link to="/services" className="button next">Services</Link></li>
              </ul>
            </div>
          </section>
        </div>

      </Layout>
    )
  }
}

export default HomeIndex