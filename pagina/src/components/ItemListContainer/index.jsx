import React from 'react'
import Card from '../Card'
import styles from './list.module.css'

const ItemListContainer = ({productos}) => {
  return (
    <div className={styles.container}>
      {productos.map((productos) => (
      <Card key={productos.id} productos={productos}/>
      ))}
    </div>
  )
}

export default ItemListContainer