import React from "react";

type Props = {
	title: string;
	lyrics: string;
};

const SongLyric = ({ title, lyrics }: Props) => {
	return (
		<section>
			<h3 className="uppercase font-bold">{title}</h3>
			<blockquote className="whitespace-pre-wrap ml-8">
				{lyrics}
			</blockquote>
		</section>
	);
};

export default SongLyric;
