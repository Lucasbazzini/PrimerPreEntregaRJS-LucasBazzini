import React from 'react'
import styles from './item.module.css'

const Greeting = ({ greeting = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde iusto odio ut delectus, fugit velit alias laborum, itaque repellat, optio aspernatur quae? Libero qui, inventore esse eum enim distinctio." }) => {
    return (
      <div>
        <h2 className={styles.text}>{greeting}</h2>
      </div>
    );
  };

export default Greeting