import React, { useState, useEffect } from "react";
import styles from "./StyleMain.module.css";
import Button from "./Button";
import Card from "./Card";
import axios from 'axios';
import Pokeinfo from "./Pokeinfo";

function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0");
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [pokeDex, setPokeDex] = useState();
    

    const getPokemon = async (nomePokemon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        
        setPokeDex(res.data);
       
    }
    const pokeFun = async () => {
        setLoading(true)
        const res= await axios.get(url);
        console.log(res);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        //getPokemon não precisa mais pois chamo na linha 17;
        setPokeData(res.data.results);
        setLoading(false);
        
    }
    
    useEffect(() => {
        pokeFun();
    }, [url]);

    

    return (
        <div className={styles.row}  >
            <div className={styles.card} >
                <h2>Pokemons</h2>
                <Card pokemon={pokeData} loading={loading} infoPokemon={getPokemon}  />

                <div className={styles.container_btn}>
                    <Button text="Voltar" onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }} />

                    <Button text="Avançar" onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }} />
                </div>
            </div>

            <div className={styles.card}>
              {pokeDex &&  <Pokeinfo data={pokeDex} />}
            </div>

        </div>
    );
}

export default Main;