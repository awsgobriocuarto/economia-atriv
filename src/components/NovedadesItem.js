import React from 'react'
import { Link } from 'react-router-dom'

export default function NovedadesItem(props) {
  const items = props.items
  return (
    <>
      {
        items.map((item) => {
          return (
            <article key={item.id}>
              <Link to={`/novedades/${item.slug}`}>
                <h6>{item.title}</h6>
              </Link>
              <p>{item.summary}</p>
            </article>
          )
        })
      }
    </>
  )
}
