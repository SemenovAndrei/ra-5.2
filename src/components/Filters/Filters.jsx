import React from 'react'
import Filter from '../Filter/Filter'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/ru'

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const Date = styled.div`
  font-size: 1rem;
`

function Filters(props) {
  moment.locale('ru')

  const filters = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'].map((filter, index) => (
    <Filter key={index}>{filter}</Filter>
  ))

  return (
    <Container>
      {filters}
      <Date>{moment().format('DD MMMM, dddd HH:mm')}</Date>
    </Container>
  )
}

export default Filters
