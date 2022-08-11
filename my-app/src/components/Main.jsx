import React from "react";
import styles from "./StyleMain.module.css";
import Button from "./Button";
import Span from "./Span";
import Card from "./Card";
import Progress from "./Progress";

function Main(){

    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <Card text="ivy" />
                                
                <div className={styles.container_btn}>
                    <Button text="Voltar" />
                    <Button text="Avançar" />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
                </div>

                <div className={styles.name}>
                    <p>Ivysaur</p>
                </div>
                
                <div className={styles.span}>
                    <Span text="Grass" />
                    
                    <Span text="Poison" />
                </div>

                <div className={styles.progress}>
                    <label for="file">HP</label>  
                    <Progress text="50" />

                    <label for="file">AD</label>  
                    <Progress text="10" />

                    <label for="file">FAFP</label>  
                    <Progress text="30" />

                    <label for="file">DADA</label>  
                    <Progress text="80" />

                    
                </div>
                
                
            </div>

        </div>
    );
}

export default Main;