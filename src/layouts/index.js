import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                🛍 Mon panier 🛍
              </div>
              <div className="Header__summary__line">
                Nombre d'articles: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Prix total: <span className="snipcart-total-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
         Contact : "Tu 2 you" <br />
         Téléphone : 11 55 22 77 88 <br />
         E-mail : abcd.der@mail.com
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

