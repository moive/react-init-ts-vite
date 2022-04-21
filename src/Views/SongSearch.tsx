import React, { useState } from "react";
import Loader from "../components/Loader/Loader";
import SongDetails from "../components/SongSearch/SongDetails";
import SongForm from "../components/SongSearch/SongForm";
import { TypeSong } from "../utils/TypeSong";

const SongSearch = () => {
	const [search, setSearch] = useState<TypeSong | null>(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSearch = (data: TypeSong) => {
		console.log(data);
		setSearch(data);
	};
	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Song Search
			</h2>
			{loading && <Loader />}
			<SongForm handleSearch={handleSearch} />
			<SongDetails search={search} lyric={lyric} bio={bio} />
		</>
	);
};

export default SongSearch;
