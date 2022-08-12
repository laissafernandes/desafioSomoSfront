import React from "react";
import styles from "./StyleMain.module.css";
import Button from "./Button";
import Card from "./Card";
import axios from 'axios';
import Pokeinfo from "./Pokeinfo";
import { useState } from "react";
import { useEffect } from "react";

function Main(){
    const[pokeData, setPokeData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const[nextUrl, setNextUrl]=useState();
    const [prevUrl, setPrevUrl]=useState();
    const[pokeDex,setPokeDex]=useState();
    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        //console.log(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        //console.log(pokeData);

    }
    const getPokemon = async(res)=>{
        res.map(async(item) => {
            const result=await axios.get(item.url)
            //console.log(result.data);
            setPokeData(state=>{
                state=[...state,result.data];
                state.sort((a,b)=>a.id>b.id?1:+1) 
                return state;
            })


        });
    }
    useEffect(()=>{
        pokeFun();
    }, [url]);

    return (

        
        <div className={styles.row}>
            <div className={styles.card}>
                <h2>Pokemons</h2>
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} />
               
                <div className={styles.container_btn}>
                    { prevUrl && <Button text="Voltar" onClick={()=>{
                        setPokeData([])
                        setUrl(prevUrl)
                    }} />}

                    {nextUrl && <Button text="Avançar" onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl)
                    }} />}
                </div>
            </div>

            <div className={styles.card}>
                <Pokeinfo data={pokeDex} />
                
            </div>

        </div>
    );
}

export default Main;