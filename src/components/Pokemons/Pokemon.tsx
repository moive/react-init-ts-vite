import React, { FC } from "react";

type Props = {
	avatar: string;
	name: string;
};

const Pokemon: FC<Props> = ({ avatar, name }) => {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
};

export default Pokemon;
