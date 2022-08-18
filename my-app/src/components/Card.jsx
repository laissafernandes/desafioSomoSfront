import React from "react";
import styles from "./StyleMain.module.css";

function Card({pokemon, loading, infoPokemon}){
    console.log(pokemon);
    return(
       <>
            {
                loading ? <h2>Loading...</h2> : 
                //tratamento de erros (se chegou em pokemon ele mostra, se não ele aguarda)
                !!pokemon && 
                pokemon.map((item, index)=>{
                    
                    return(
                        <> 
                            <div className={styles.list} key={index + 1} onClick={()=>infoPokemon(item.name)}>
                                <p>{index + 1} {item.name}</p>
                                
                            </div>
                        </>
                    )
                })
            }
            
       </>
          
    )
}
export default Card;