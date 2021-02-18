import React from 'react'
import Aside from '../Aside/Aside'
import ExchangeRates from '../ExchangeRates/ExchangeRates'
import Filters from '../Filters/Filters'
import NewsList from '../NewsList/NewsList'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const AsideBlock = styled.div`
  width: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
`

export default function WidgetTop() {
  return (
    <Container>
      <div>
        <Filters />
        <NewsList />
        <ExchangeRates />
      </div>
      <AsideBlock>
        <Aside />
      </AsideBlock>
    </Container>
  )
}
