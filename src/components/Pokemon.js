import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Pokemon({match}) {
    const [pokemon, setPokemon] = useState({name: '', sprites:{}})
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}/`)
        .then(res => res.json())
        .then(pokeData => setPokemon(pokeData))
    }, [])

  return (
    <div>
        <h1>
            {pokemon.name}
        </h1>
            <img src={pokemon.sprites.front_default}/>
    </div>
  )
}
