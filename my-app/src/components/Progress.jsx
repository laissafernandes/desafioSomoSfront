import React from "react";
import styles from "./style.module.css";

function Progress({text},{num}){
    return(
        <>
            <div className={styles.progress_bar}>
                    
                    <label for="file">{text}</label>   
                    <progress  value={num} max="100" className={styles.progress_span}>{num} %</progress>
            </div>
        </>
    )   
}
export default Progress;