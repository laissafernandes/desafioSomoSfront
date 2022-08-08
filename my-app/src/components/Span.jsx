import styles from "./Span.module.css";

function Label({ text }){
    return(
        <span className={styles.style_span}>{text}
        </span>

       

    )
}

export default Label;