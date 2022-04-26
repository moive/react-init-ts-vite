import React from "react";
import { TypeArtist } from "../../utils/TypeArtist";

type Props = {
	artist: TypeArtist;
};

const SongArtist = ({ artist }: Props) => {
	const {
		strArtist,
		strArtistThumb,
		intBornYear,
		intDiedYear,
		strCountry,
		strGenre,
		strStyle,
		strWebsite,
		strBiographyEN,
	} = artist;
	return (
		<section>
			<h3>{strArtist}</h3>
			<img src={strArtistThumb} alt={strArtist} />
			<p>
				{intBornYear} - {intDiedYear || "Present"}
			</p>
			<p>{strCountry}</p>
			<p>
				{strGenre} - {strStyle}
			</p>
			<a href={strWebsite} target="_blank" rel="noreferrer">
				Official website
			</a>
			<p>{strBiographyEN}</p>
		</section>
	);
};

export default SongArtist;
