import React from "react";

type Props = {
	msg: string;
	bgColor: string;
};

const Message = ({ msg, bgColor }: Props) => {
	return <div className={bgColor}>{msg}</div>;
};

export default Message;
