import React from 'react'
import ExchangeRate from '../ExchangeRate/ExchangeRate'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  font-weight: bold;
`

const rates = [
  { name: 'USD', value: '63.52', rate: '+0.09' },
  { name: 'EUR', value: '70.86', rate: '+0.14' },
  { name: 'НЕФТЬ', value: '64.90', rate: '+1.63' },
]

/**
 * Блок курс валют
 */
export default function ExchangeRates() {
  return (
    <Container>
      {rates.map((o) => (
        <ExchangeRate key={o.name} {...o} />
      ))}
      ...
    </Container>
  )
}
