import React, { useEffect, useState } from "react";
import Pokemon from "../components/Pokemons/Pokemon";

interface Pokemon {
	id: string;
	name: string;
	avatar: string;
	url?: string;
	types: [];
}

const Pokemons = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		setPokemons([]);
		getAllPokemons("https://pokeapi.co/api/v2/pokemon/");
		console.log(123);
	}, []);

	const getAllPokemons = async (url: any) => {
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.results);
		data.results.forEach(async (p: Required<Pokemon>) => {
			const res = await fetch(p.url);
			const data = await res.json();
			let pokemon = {
				id: data.id,
				name: data.name,
				avatar: data.sprites.other.dream_world.front_default,
				types: data.types,
				// url: "",
			};
			console.log(data);
			setPokemons((pokemons) => [...pokemons, pokemon]);
		});
	};

	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Asynchronous requests {pokemons.length}
			</h2>
			<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5 mt-5">
				{pokemons.length === 0 ? (
					<h3>Loading...</h3>
				) : (
					pokemons.length > 0 &&
					pokemons.map((pok: Pokemon) => (
						<Pokemon
							key={pok.id}
							name={pok.name}
							avatar={pok.avatar}
							types={pok.types}
						/>
					))
				)}
			</section>
		</>
	);
};

export default Pokemons;
