import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  margin-top: 10px;

  display: flex;
  align-items: center;
  position: relative;
`
const ImagesContainer = styled.div`
  position: absolute;

  left: -100px;
  cursor: pointer;
`

const Fields = styled.input`
  width: 80%;
  height: 40px;
  padding: 5px;
`
const Button = styled.button`
  height: 40px;
  padding: 5px;
  background-color: yellow;
  border-style: none;
  cursor: pointer;
  color: blue;
  font-size: 1.2rem;
`
/**
 * Блок с полем поиска
 */
export default function SearchField() {
  return (
    <form>
      <Container>
        <ImagesContainer>Тындекс</ImagesContainer>
        <Fields type="search"></Fields>
        <Button>Найти</Button>
      </Container>
      <div>
        Найдется всё. Например, <a href="#0">JavaScript</a>{' '}
      </div>
    </form>
  )
}
