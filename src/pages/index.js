import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import styled from 'styled-components'

const IndexPage = () => (
  <Container>
    <div>logo</div>
    <nav>
      <Link to={'/resume'}>resume</Link>
      <Link to={'/work'}>work</Link>
      <Link to={'/blog'}>Blog</Link>
      <section>
        <main>
          <h1>Hello! I'm Droan Malik.</h1>
          <h3>
            I do <strong>web stuff</strong>
          </h3>
        </main>
      </section>
      <section>
        <a target={'_blank'} href="https://github.com/notdrone">
          github
        </a>
        <a target={'_blank'} href="https://instagram.com/notdrone">
          instagram
        </a>
        <a target={'_blank'} href="https://twitter.com/notdrone">
          twitter
        </a>
        <a target={'_blank'} href="💩">
          linkedin
        </a>
        <a target={'_blank'} href="mailto:droanmalik@gmail.com">
          email
        </a>
      </section>
    </nav>
  </Container>
)

const Container = styled.div`
  background: rgb(230, 229, 225);
  width: 100vw;
  height: 100vh;
  border: 1rem solid white;
`

export default IndexPage

// <Layout>
{
  /*<nav>*/
}
{
  /*<Link to="/page-2/">Go to page 2</Link>*/
}
{
  /*</nav>*/
}
{
  /*<div>logo</div>*/
}
{
  /*<h1>Hi! I'm Droan Malik</h1>*/
}
{
  /*<p>I do web stuff.</p>*/
}
{
  /*<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>*/
}
{
  /*<Image />*/
}
{
  /*</div>*/
}
// </Layout>
