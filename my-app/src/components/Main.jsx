import React from "react";
import styles from "./style.module.css";
import Button from "./Button";
import Span from "./Span";
import Card from "./Card";
import Progress from "./Progress";

function Main(){

    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <Card text="Ivy" />
                                
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

                    <Progress num="50" text="HP" />
                    <Progress num="60" text="HP" />
                    <Progress num="10" text="HP" />
                    <Progress num="20" text="HP" />
                </div>
                
                
            </div>

        </div>
    );
}

export default Main;