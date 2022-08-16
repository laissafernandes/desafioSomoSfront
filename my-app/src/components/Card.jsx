import React from "react";
import styles from "./StyleMain.module.css";

function Card({pokemon, loading, infoPokemon}){
    console.log(pokemon);
    return(
       <>
            {
                loading ? <h2>Loading...</h2> : 
                pokemon.map((item)=>{
                    return(
                        <> 
                            <div className={styles.list} key={item.id} onClick={()=>infoPokemon(item)}>
                                <p>{item.id} {item.name}</p>
                                
                            </div>
                        </>
                    )
                })
            }
            
       </>
          
    )
}
export default Card;