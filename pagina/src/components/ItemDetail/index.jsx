import { useState } from "react"
import { useParams } from "react-router-dom"
import styles from './detail.module.css'


const ItemDetail = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()
  fetch("../items.json")
  .then(res=> res.json())
  .then(data => setProducto(data.componentes.find(item => item.id === id)))
  return (
    <div>
      <h2 className={styles.titulo}>{producto.titulo}</h2>
      <img className={styles.imagen} src={producto.imagen}/>
      <p className={styles.descripcion}>{producto.descripcion}</p>
      <h3 className={styles.precio}>${producto.precio}</h3>
      <h4>Categoria: {producto.categoria}</h4>
      <h5>Stock disponible: {producto.stock}</h5>
      <p>Calificacion segun clientes:{producto.calificacion}</p>
    </div>
    )}
export default ItemDetail