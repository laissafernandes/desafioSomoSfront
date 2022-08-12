import React from "react";
import styles from "./Progress.module.css";

function Progress({data}){
    return(
        <>
            <div className={styles.progress_bar}>
                  
                   <progress  value={data} max="100" className={styles.progress_span}>{data}%</progress>
            </div>
        </>
    )   
}
export default Progress;