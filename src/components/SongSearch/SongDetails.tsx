import React from "react";
import { TypeSong } from "../../utils/TypeSong";
import Message from "../Loader/Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

type Props = {
	search: TypeSong | null;
	lyric: any | null;
	bio: any | null;
};

const SongDetails = ({ search, lyric, bio }: Props) => {
	console.log(bio);
	if (!lyric || !bio) return null;

	return (
		<>
			{lyric.err || lyric.name === "AbortError" ? (
				<Message
					msg={`Error: the song does not exist ${search?.song}`}
					bgColor="bg-red-400 text-white font-bold p-3 mb-3"
				/>
			) : (
				<SongLyric title={search!.song} lyrics={lyric.lyrics} />
			)}
			{bio.artists ? (
				<SongArtist artist={bio.artists[0]} />
			) : (
				<Message
					msg={`Error: there is not interpreter ${search?.artist}`}
					bgColor="bg-red-400 text-white font-bold p-3"
				/>
			)}
		</>
	);
};

export default SongDetails;
