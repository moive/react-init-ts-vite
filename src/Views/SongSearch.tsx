import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import SongDetails from "../components/SongSearch/SongDetails";
import SongForm from "../components/SongSearch/SongForm";
import { helpHttp } from "../helpers/helpHttp";
import { TypeSong } from "../utils/TypeSong";

const SongSearch = () => {
	const [search, setSearch] = useState<TypeSong | null>(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchData();
	}, [search]);

	const fetchData = async () => {
		if (search === null) return;
		const { artist, song } = search;

		let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
		let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

		setLoading(true);

		const [aristRes, songRes]: any = await Promise.all([
			helpHttp().get(artistUrl),
			helpHttp().get(songUrl),
		]);

		// console.log(aristRes, songRes);
		setBio(aristRes);
		setLyric(songRes);
		setLoading(false);
	};

	const handleSearch = (data: TypeSong) => {
		// console.log(data);
		setSearch(data);
	};
	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Song Search
			</h2>
			<div className="wrapper-content-3">
				<SongForm handleSearch={handleSearch} />
				{loading && <Loader />}
				{search && !loading && (
					<SongDetails search={search} lyric={lyric} bio={bio} />
				)}
			</div>
		</>
	);
};

export default SongSearch;
