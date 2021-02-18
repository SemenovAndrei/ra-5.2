import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImagesContainer = styled.div`
  position: absolute;

  left: -1.3rem;
`
const Images = styled.img`
  width: 1.2rem;
`

const Container = styled.div`
  position: relative;
  margin: 10px 0;
  display: flex;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

function News(props) {
  return (
    <Container>
      <ImagesContainer>
        <Images src={props.icon} alt={props.title} />
      </ImagesContainer>
      <Link href={props.href}>{props.title}</Link>
    </Container>
  )
}

News.defaultProps = {
  icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
  href: '#0',
}

News.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default News
