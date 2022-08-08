import styles from "./Cards.module.css";
import Button from "./Button";
import Span from "./Span";

function Cards (){

    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <h2>Pokemons</h2>
                <div className={styles.list}>
                    <p>Ivy</p>
                    <p>Laissa</p>
                    <p>Camba</p>
                    <p>Hugo</p>
                </div>
                
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

                    <div className={styles.progress_bar}>
                    
                        <label for="file">HP</label>   
                        <progress  value="70" max="100" className={styles.progress_span}>70 %</progress>
                    </div>

                    <div className={styles.progress_bar}>
                        <label for="file">Defense</label>
                        <progress value="10" max="100" className={styles.progress_span}>10 %</progress>
                    </div>                    

                    <div className={styles.progress_bar}>
                        <label for="file">Attack</label>
                        <progress value="20" max="100" className={styles.progress_span}>20 %</progress>
                    </div>                    
                    
                    <div className={styles.progress_bar}>
                        <label for="file">Speed</label>
                        <progress value="50" max="100" className={styles.progress_span}>50 %</progress>
                    </div>                    
                    
                    
                </div>
                
                
            </div>

        </div>
    );
}

export default Cards;