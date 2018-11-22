import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <nav>
      <Link to="/page-2/">Go to page 2</Link>
    </nav>
    <div>logo</div>
    <h1>Hi! I'm Droan Malik</h1>
    <p>I do web stuff.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
