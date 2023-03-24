import React from 'react'
import styles from './hero.module.css'
import Greeting from '../Greeting'

export const Hero = () => {
    return (
        <section className={styles.backgroundHero}>
            <div className={styles.divHero}>
                <div className={styles.divTittle}>
                    <h1 className={`${styles.tittle} animate__animated animate__fadeInLeft`}>
                    Potencia tu gaming con nuestros componentes
                    </h1>
                </div>
                <div className={`${styles.divText} animate__animated animate__fadeInRight `}>
                <Greeting />
                </div>
            </div>
        </section>
    )
}

export default Hero