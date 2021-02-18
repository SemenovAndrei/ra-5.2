import { nanoid } from 'nanoid'
import React from 'react'
import News from '../News/News'

const news = [
  {
    title:
      'Германия будет штрафовать Facebook и YouTube за фальшивые новости на 50 млн евро',
    id: nanoid(),
  },
  {
    title: 'Facebook: французские и российские тролли борются за влияние в Африке',
    id: nanoid(),
  },
  {
    title: 'В России появится открытый реестр фейковых новостей и их авторов',
    id: nanoid(),
  },
  {
    title: 'Роспечать хочет создать сервис по распознаванию фальшивых новостей',
    id: nanoid(),
  },
  {
    title: 'Адама и Еву изгнали из рая из-за фейковых новостей. Объясняет папа римский',
    id: nanoid(),
  },
]

/**
 * Блок новостей
 */
export default function NewsList() {
  return (
    <div>
      {news.map((o) => (
        <News key={o.id} {...o} />
      ))}
    </div>
  )
}
