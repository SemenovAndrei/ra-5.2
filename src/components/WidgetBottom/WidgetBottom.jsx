import React from 'react'
import Banner from '../Banner/Banner'
import styled from 'styled-components'
import Card from '../Card/Card'
import { nanoid } from 'nanoid'

const Container = styled.div`
  margin-top: 10px;
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Span = styled.span`
  color: grey;
`

const data = [
  {
    title: 'Погода',
    markup: [
      <h3 key={nanoid()}>+17</h3>,
      <p key={nanoid()}>Утром +17</p>,
      <p key={nanoid()}>днём +20</p>,
    ],
  },
  { title: 'Карта Германии', markup: [<p key={nanoid()}>Расписания</p>] },
  {
    title: 'Эфир',
    markup: [
      <p key={nanoid()}>
        Управление как искусство <Span>Успех</Span>
      </p>,
      <p key={nanoid()}>
        Ночь. Мир в это время <Span>earthTV</Span>
      </p>,
      <p key={nanoid()}>
        Андрей Воз... <Span>Совершенно секретно</Span>
      </p>,
    ],
  },
  {
    title: 'Посещаемое',
    markup: [
      <p key={nanoid()}>
        <b>Недвижимость</b> - о сталинках
      </p>,
      <p key={nanoid()}>
        <b>Маркет</b> - люстры и светильники
      </p>,
      <p key={nanoid()}>
        <b>Авто.ру</b> - привод 4х4 до 500 000
      </p>,
    ],
  },
  {
    title: 'Телепрограмма',
    markup: [
      <p key={nanoid()}>
        02:00 TNT.BEST <Span>TNT International</Span>
      </p>,
      <p key={nanoid()}>
        02:15 Джинглики <Span>Карусель INT</Span>
      </p>,
      <p key={nanoid()}>
        02:25 Наедине со всеми <Span>Первый</Span>
      </p>,
    ],
  },
]

export default function WidgetBottom() {
  return (
    <Container>
      <Banner />
      <Cards>
        {data.map((item, index) => (
          <Card key={index} title={item.title}>
            {item.markup}
          </Card>
        ))}
      </Cards>
    </Container>
  )
}
