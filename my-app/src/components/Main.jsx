import React, { useState, useEffect } from "react";
import styles from "./StyleMain.module.css";
import Button from "./Button";
import Card from "./Card";
import axios from 'axios';
import Pokeinfo from "./Pokeinfo";

function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10");
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [pokeDex, setPokeDex] = useState();

    const getPokemon = (res) => {
        res.map(async (item) => {
        
            const result = await axios.get(item.url)
        //organiza os dados que vem da Api 
            setPokeData(state => {
               
                state = [...state, result.data];
                console.log("funcionando?")
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })

        });
    }

    useEffect(() => {
        
        const pokeFun = async () => {
            setLoading(true)
            const res = await axios.get(url);

            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            getPokemon(res.data.results);
            setLoading(false);
        }
        pokeFun();
        
    }, [url]);

    const [changeBackground, setChangeBackground] = useState(true);

    return (
        <div className={styles.row} style={{ backgroundColor: changeBackground ? '#fff6a4' : 'yellow' }} >
            <div className={styles.card} >
                <h2>Pokemons</h2>
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

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
                <Pokeinfo data={pokeDex} eventChangeBg={() => { setChangeBackground(changeBackground) }}/>
            </div>

        </div>
    );
}

export default Main;