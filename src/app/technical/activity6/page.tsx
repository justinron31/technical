"use client";

import styles from "../../page.module.css";
import BackButton from "../../components/backButton";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function Activity6() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // Fetch Pokémon data for the first 15 Pokémon concurrently
        const pokemonPromises = Array.from({ length: 15 }, (_, index) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`).then((res) =>
            res.json()
          )
        );

        const speciesPromises = Array.from({ length: 15 }, (_, index) =>
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${index + 1}/`).then(
            (res) => res.json()
          )
        );

        const [pokemonDataList, speciesDataList] = await Promise.all([
          Promise.all(pokemonPromises),
          Promise.all(speciesPromises),
        ]);

        // Map and process the data
        const pokemonDetails = pokemonDataList.map((pokemonData, index) => {
          const speciesData = speciesDataList[index];
          const englishFlavor = speciesData.flavor_text_entries.find(
            (entry: { flavor_text: string; language: { name: string } }) =>
              entry.language.name === "en"
          );

          return {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            description: englishFlavor
              ? englishFlavor.flavor_text.replace(/\n|\f/g, " ") // Clean up text
              : "No description available.",
          };
        });

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.pokemonHeader}>
        <h1>Pokémon Card List</h1>
      </div>

      <div className={styles.cardList}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className={styles.card}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={100}
              height={100}
              className={styles.avatar}
            />
            <h3>{pokemon.name}</h3>
            <p>{pokemon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
