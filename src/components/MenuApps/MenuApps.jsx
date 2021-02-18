import React from 'react'
import MenuApp from '../MenuApp/MenuApp'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const dataApps = [
  { title: 'Видео' },
  { title: 'Картинки' },
  { title: 'Новости' },
  { title: 'Карты' },
  { title: 'Маркет' },
  { title: 'Переводчик' },
  { title: 'Эфир' },
  { title: 'ещё' },
]

/**
 * Блок со ссылками
 */
export default function MenuApps() {
  return (
    <Container>
      {dataApps.map((app, index) => (
        <MenuApp key={index} {...app} />
      ))}
    </Container>
  )
}
