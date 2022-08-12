import React from "react";
import Progress from "./Progress";
import styles from "./StyleMain.module.css";


function Pokeinfo({ data }) {
    console.log(data)
    return (
        <>

            {
                (!data) ? "" : (
                    <>
                        <div className={styles.image}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        </div>

                        <div className={styles.name}>
                            <p>{data.name}</p>
                        </div>

                        <div className={styles.span}>
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <>
                                            <span className={styles.style_span}>{poke.ability.name}</span>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className={styles.progress}>

                            {
                                data.stats.map(poke => {
                                    return (
                                        <>
                                            <h3>{poke.stat.name}</h3>
                                            <Progress data={poke.base_stat} />

                                            
                                        </>
                                    )
                                })
                            }



                        </div>
                    </>
                )
            }


        </>
    )
}
export default Pokeinfo;