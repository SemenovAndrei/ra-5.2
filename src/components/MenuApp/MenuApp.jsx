import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-right: 10px;
`

const Link = styled.a`
  text-decoration: none;
`
/**
 * Блок со ссылкой на сервис
 *
 * @param {props} props
 */
function MenuApp(props) {
  return (
    <Container>
      <Link href={props.href}>{props.title}</Link>
    </Container>
  )
}

MenuApp.defaultProps = {
  href: '#0',
}

MenuApp.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default MenuApp
