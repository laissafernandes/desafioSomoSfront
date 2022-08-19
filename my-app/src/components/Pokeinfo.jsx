import React, {useState, useEffect} from "react";
import Progress from "./Progress";
import styles from "./StyleMain.module.css";



function Pokeinfo({ data }) {
    const [img, setImg] = useState();
    let id = data.id;
    let count = 0;
    let checkImg = ()=>{setImg(data.sprites.front_default)};
    
    function changePikachu(){
       
        if(id === 25){
            count++;
            if(count >= 3){
                setImg(data.sprites.other.dream_world.front_default);
            }else{
                setImg(data.sprites.front_default)
            }
            
        }else{
            
            count = 0;
            setImg(data.sprites.front_default);
            
        }
    }
    useEffect(() => {
        checkImg()
    }, [data]);
    console.log("renderizei")

    


    return (
        <>

            {
                //tratamento de erros
                !!data && (
                    <>

                        <div className={styles.image}>
                            <img src={img}
                                alt="imagem" onClick={()=>{changePikachu()}}/>


                        </div>

                        <div className={styles.name}>
                            <p>{data.name}</p>
                        </div>

                        <div className={styles.span}>
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <>
                                            <span className={styles.span}>{poke.ability.name}</span>
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