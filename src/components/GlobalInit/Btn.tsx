import React from 'react';

type Props = {
    myOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn = ({myOnClick}: Props) => {
  return (
    <button onClick={myOnClick}>Btn button</button>
  )
}

export default Btn