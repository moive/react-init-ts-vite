import React, { FC } from "react";

type arrPoke = {
	type: {
		name: string;
	};
};

type Props = {
	avatar: string;
	name: string;
	types: Array<arrPoke>;
};

const Pokemon: FC<Props> = ({ avatar, name, types }) => {
	return (
		<figure
			className={`flex justify-center shadow-md rounded-md py-3 bg-white flex-col justify-between ${types[0].type.name}`}
		>
			<img src={avatar} alt={name} />
			<figcaption className="text-xl font-bold capitalize text-center">
				{name}
			</figcaption>
		</figure>
	);
};

export default Pokemon;
