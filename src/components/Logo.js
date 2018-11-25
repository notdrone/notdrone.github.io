import React, { Component } from 'react'
import styled from 'styled-components'

class Logo extends Component {
  render() {
    return (
      <Container>
        <img
          src="https://avatars1.githubusercontent.com/u/5713737?s=460&v=4"
          alt="notdrone"
        />
        {this.props.withTitle && <h1>notdr.one</h1>}
      </Container>
    )
  }
}

Logo.defaultProps = {
  withTitle: false,
}

const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 56px;
    height: 56px;
    border-radius: 5px;
    margin: 0;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0 0 0 1rem;
    padding: 0;
    text-align: center;
    font-weight: 500;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.05);
    color: rgb(90, 175, 141);
  }
`

export default Logo
