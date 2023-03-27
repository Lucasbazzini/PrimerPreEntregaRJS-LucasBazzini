import { Link } from 'react-router-dom'
import styles from './card.module.css'

const Card = ({ productos }) => {
  return (
    <div className={styles.container}>
      <Link key={productos.id} className={styles.link} to={`/productos/${productos.id}`}>
      <div className={styles.container_secundario}>
          <div className={styles.container_tittle}>
            <h3 className={styles.titulo}>{productos.titulo}</h3>
          </div>
          <div className={styles.container_img}>
            <img className={styles.imagen} src={productos.imagen} />
          </div>
          <div className={styles.container_text}>
            <p className={styles.descripcion}>{productos.descripcion}</p>
            <h4 className={styles.precio}>${productos.precio}</h4>
          </div>
      </div>
    </Link>
    </div >
  )
}

export default Card