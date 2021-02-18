import React from 'react'
import pic from './grafiti01.jpg'
import styled from 'styled-components'

const Images = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`

export default function Banner() {
  return (
    <div>
      <Images className="card-image" src={pic} alt="banner" />
    </div>
  )
}
