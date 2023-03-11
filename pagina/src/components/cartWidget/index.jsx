import React,  { useState } from 'react'
import styles from './cart.css'

export function CartWidget() {
  const [productos, setProductos] = useState([]);

  {/*function agregarProducto() {
    const nuevoProducto = {
      id: 1, 
      cantidad: 1, 
      
    };
    setProductos([...productos, nuevoProducto]);
  }
  FUTURA FUNCIONALIDAD DE VER NUMEROS EN CARRITO

*/}
  const cantidad = productos.reduce((total, producto) => total + producto.cantidad, 0);
  
  return (
    <div>
    <i className='bi bi-cart3'></i>
    {cantidad > 0 ? (
        <span className={styles.cantidad}>{cantidad}</span>
      ) : (
        <span className={styles.cantidad}>0</span>
      )}
      {/*<button onClick={agregarProducto}>Agregar al carrito</button>
      BOTON DE PRUEBA 
      */}
    </div>
    
  )
}

export default CartWidget