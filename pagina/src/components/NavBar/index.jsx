import React from 'react'
import Logo from '../../assets/logo.png'
import CartWidget from '../cartWidget'
import Button from '../Button'
import styles from './navbar.module.css'

export const Navbar = () => {
    
    return (
        <header className={`${styles.header} animate__animated animate__fadeInDown`}>
            <nav className={styles.navbar}>
            <div className={styles.divLogo}>
                <a href="#">
                    <img className={styles.logo} src={Logo} />
                </a>
            </div>
            <div className={styles.sectionLinks}>
                <Button text='Nosotros'/>
                <Button text='Especialidades'/>
                <Button text='Contacto'/>
            </div>
            <div className={styles.carritoCompras}>
                <button className={styles.buttonCarrito}>
                <CartWidget/>
                </button>
            </div>
        </nav>
        </header>
        


    )
}

export default Navbar