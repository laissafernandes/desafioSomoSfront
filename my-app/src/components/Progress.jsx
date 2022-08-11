import React from "react";
import styles from "./Progress.module.css";

function Progress({text}){
    return(
        <>
            <div className={styles.progress_bar}>
                  
                   <progress  value={text} max="100" className={styles.progress_span}>{text}%</progress>
            </div>
        </>
    )   
}
export default Progress;