import React from 'react'
import Link from 'gatsby-link'
import TitlePicture from '../components/title-picture';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        minHeight: 220,
        padding: '1.45rem 1.0875rem',
        position: 'relative'
      }}
    >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}>
        <TitlePicture/>
        <h1 style={{ margin: 0, display: "inline-block", position: 'absolute', bottom: 17}}>
            {siteTitle}
        </h1>
      </Link>
    </div>
  </div>
)

export default Header