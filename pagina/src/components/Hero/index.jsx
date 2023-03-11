import React from 'react'
import styles from './hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.backgroundHero}>
            <div className={styles.divHero}>
                <div className={styles.divTittle}>
                    <h1 className={styles.tittle}>
                        PizzaClub: ¡La pizza más sabrosa de la década de los 80s!
                    </h1>
                </div>
                <div className={styles.divText}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde iusto odio ut delectus, fugit velit alias laborum, itaque repellat, optio aspernatur quae? Libero qui, inventore esse eum enim distinctio.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero