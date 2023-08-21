import React, { useState } from 'react';

const ContadorS = () => {
  const [cont, setCont] = useState(0);

  const incremento = () => {
    setCont(cont + 1);
  };

  const decremento = () => {
    setCont(cont - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor: {cont}</p>
      <button onClick={incremento}>Incrementar</button>
      <button onClick={decremento}>Decrementar</button>
    </div>
  );
};

export default ContadorS;