import React from "react";
import styles from "./style.module.css";

function Card({text}){

    return(
       <>
            <h2>Pokemons</h2>
                <div className={styles.list}>
                    <p>{text}</p>
                    
                </div>
       </>
          
    )
}
export default Card;