import React from 'react'
import styles from './list.module.css'

const ItemListContainer = (productos) => {
  return (
    <div>
      {productos.map((productos) => (<h3 key={pizzas.id}>{productos.titulo}</h3>))}
    </div>
  )
}

export default ItemListContainer