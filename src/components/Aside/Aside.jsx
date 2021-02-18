import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Images = styled.img`
  width: 40%;
`

function Aside(props) {
  return (
    <div>
      <Images src={props.src} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

Aside.defaultProps = {
  src: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
  title: 'Работа над ошибками',
  text: 'Ищете на Тындексе',
}

Aside.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Aside
