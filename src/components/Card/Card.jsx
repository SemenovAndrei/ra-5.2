import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
`
const Container = styled.div`
  width: 30%;
  margin-right: 10px;
  font-size: 16px;
`

export function Card(props) {
  return (
    <Container>
      <h3>
        <Link href="#0">{props.title}</Link>
      </h3>
      {props.children}
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
