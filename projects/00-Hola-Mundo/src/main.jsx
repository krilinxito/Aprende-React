import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const Button = ({ Text }) => {
  return (
    <button>{Text}</button>
  );
};

root.render(
  <React.Fragment>
    <Button Text={"Hola Mundo"} />
    <Button Text={"Adios Mundo"} />
  </React.Fragment>
);
