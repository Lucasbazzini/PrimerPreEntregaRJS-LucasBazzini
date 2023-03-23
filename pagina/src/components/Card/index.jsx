import styles from './card.module.css'

const Card = ({ productos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_secundario}>
        <h3 className={styles.titulo}>{productos.titulo}</h3>
        <img className={styles.imagen} src={productos.imagen} />
        <p className={styles.descripcion}>{productos.descripcion}</p>
        <h4 className={styles.precio}>${productos.precio}</h4>
      </div>
    </div>
  )
}

export default Card