import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Shop() {
    useEffect(() => fetchData(), [])

    const [pokemon, setPokemon] = useState([])

    const fetchData = async () =>{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=200")
        const pokemon = await data.json()
        setPokemon(pokemon.results)
    }

   
    return (
        <>
            <h1>Shop</h1>
            {pokemon.map(poke => {
                return(
                    <h3 key={poke.name} >
                        <Link to={`/shop/${poke.name}`}>{poke.name}</Link>
                    </h3>
                )
            })}
        </>
    )
}
