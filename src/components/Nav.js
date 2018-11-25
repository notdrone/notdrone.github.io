import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

class Nav extends Component {
  render() {
    return (
      <Container>
        <Link className={'link'} to={'/resume'}>
          Résumé
        </Link>
        <Link className={'link'} to={'/work'}>
          Work
        </Link>
        <Link className={'link'} to={'/blog'}>
          Blog
        </Link>
      </Container>
    )
  }
}

const Container = styled.nav`
  text-align: end;
  .link {
    margin-left: 2.4rem;
    padding: 0 0.5rem;
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    font-weight: 500;
    :hover {
      text-decoration: underline rgba(0, 0, 0, 0.8);
    }
  }
`

export default Nav
