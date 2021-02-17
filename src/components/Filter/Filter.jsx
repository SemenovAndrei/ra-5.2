import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  color: blue;
  font-size: 1.2rem;
`

function Filter(props) {
  return <Button>{props.children}</Button>
}

export default Filter
