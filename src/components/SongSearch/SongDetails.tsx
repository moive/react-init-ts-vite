import React from "react";
import { TypeSong } from "../../utils/TypeSong";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

type Props = {
	search: TypeSong | null;
	lyric: null;
	bio: null;
};

const SongDetails = ({ search, lyric, bio }: Props) => {
	return (
		<div>
			<h2>Details</h2>
			<SongArtist />
			<SongLyric />
		</div>
	);
};

export default SongDetails;
