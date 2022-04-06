import React, { useState } from "react";
import Pokemon from "../components/Pokemons/Pokemon";

const Pokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	return (
		<>
			<h2>Asynchronous requests</h2>
			{pokemons.length === 0 ? (
				<h3>Loading...</h3>
			) : (
				pokemons.map((pok) => (
					<Pokemon key={pok.id} name={pok.name} avatar={pok.avatar} />
				))
			)}
		</>
	);
};

export default Pokemons;
