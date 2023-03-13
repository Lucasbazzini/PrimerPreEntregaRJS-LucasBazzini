import React from 'react'
import styles from './hero.module.css'
import ItemListContainer from '../ItemListContainer'

export const Hero = () => {
    return (
        <section className={styles.backgroundHero}>
            <div className={styles.divHero}>
                <div className={styles.divTittle}>
                    <h1 className={`${styles.tittle} animate__animated animate__fadeInLeft`}>
                        PizzaClub: ¡La pizza más sabrosa de la década de los 80s!
                    </h1>
                </div>
                <div className={`${styles.divText} animate__animated animate__fadeInRight `}>
                <ItemListContainer />
                    {/*<h2 className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde iusto odio ut delectus, fugit velit alias laborum, itaque repellat, optio aspernatur quae? Libero qui, inventore esse eum enim distinctio.
                    </h2>*/}
                </div>
            </div>
        </section>
    )
}

export default Hero