import { nanoid } from 'nanoid'
import React from 'react'
import News from '../News/News'

const news = [
  {
    href: '#0',
    icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
    title:
      'Германия будет штрафовать Facebook и YouTube за фальшивые новости на 50 млн евро',
    id: nanoid(),
  },
  {
    href: '#0',
    icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
    title: 'Facebook: французские и российские тролли борются за влияние в Африке',
    id: nanoid(),
  },
  {
    href: '#0',
    icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
    title: 'В России появится открытый реестр фейковых новостей и их авторов',
    id: nanoid(),
  },
  {
    href: '#0',
    icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
    title: 'Роспечать хочет создать сервис по распознаванию фальшивых новостей',
    id: nanoid(),
  },
  {
    href: '#0',
    icon: 'https://cdn.pixabay.com/photo/2017/10/27/21/41/diablito-2895604_960_720.png',
    title: 'Адама и Еву изгнали из рая из-за фейковых новостей. Объясняет папа римский',
    id: nanoid(),
  },
]

export default function NewsList() {
  return (
    <div>
      {news.map((o) => (
        <News key={o.id} {...o} />
      ))}
    </div>
  )
}
