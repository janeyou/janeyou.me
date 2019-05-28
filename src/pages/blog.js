import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout'

const BlogPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <div className="Logos" />
          <div className="CardGroup">
            <Card
              title="Under Construction"
              text="Coming soon. Contact me to ask anything."
              type="blog"
              tags=""
              image=""
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default BlogPage
