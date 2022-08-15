import styles from "./Button.module.css";

function Button({ text, onClick  } ){
    return(
        <div>
            <button className={styles.btn} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;