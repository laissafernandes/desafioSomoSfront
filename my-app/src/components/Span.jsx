import React from "react";
import styles from "./Span.module.css";

function Span({ text }){
    return(
       
        <span className={styles.style_span}>{text}</span>

    )
}

export default Span;