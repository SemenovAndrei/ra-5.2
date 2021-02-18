import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-right: 10px;
`

const Rate = styled.span`
  color: #b5b5b5;
`
/**
 * Курс переданной валюты
 *
 * @param {props} props
 */
function ExchangeRate(props) {
  return (
    <Container>
      {props.name} MOEX {props.value} <Rate>{props.rate}</Rate>
    </Container>
  )
}

ExchangeRate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
}

export default ExchangeRate
