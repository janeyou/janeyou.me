import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Section from './Section'

import favicon16 from '../images/favicon-16_blank.png'
import favicon32 from '../images/favicon-32_blank.png'
import favicon64 from '../images/favicon-43x43_blank.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
        allContentfulProjects {
          edges {
            node {
              public
            }
          }
        }
        allContentfulQuotes {
          edges {
            node {
              public
            }
          }
        }
        allContentfulTalks {
          edges {
            node {
              public
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${favicon16}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${favicon32}`,
            },
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
          ]}
        />
        <Header
          data={data.allContentfulLink}
          projects={data.allContentfulProjects}
          quotes={data.allContentfulQuotes}
          talks={data.allContentfulTalks}
        />
        {children}
        <Section
          image={require('../images/bg_414.png')}
          logoIG={require('../images/instagram-3-24.ico')}
          logoLI={require('../images/linkedin-3-24.ico')}
          logoTW={require('../images/twitter-3-24.ico')}
          logoEM={require('../images/email-3-24.ico')}
          title="Get In Touch"
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
