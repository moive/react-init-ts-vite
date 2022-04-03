import React from 'react';

type Props = {
    title: string;
}

const TitlePage = ({title}: Props) => {
  return (
    <h1>{title}</h1>
  )
}

export default TitlePage