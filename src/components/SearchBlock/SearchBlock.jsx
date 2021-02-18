import React from 'react'
import MenuApps from '../MenuApps/MenuApps'
import styled from 'styled-components'
import SearchField from '../SearchField/SearchField'

const Container = styled.div`
  margin-top: 10px;
`

export default function SearchBlock() {
  return (
    <Container>
      <MenuApps />
      <SearchField />
    </Container>
  )
}
