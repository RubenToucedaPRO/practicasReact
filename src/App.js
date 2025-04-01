import { useState } from "react";

export default function MiApp() {
  const [num, inc] = useState(0);
  function pulsar() {
    inc(num + 1);
  }

  return (
    <div>
      <Boton numV={num} click={pulsar} />
      <Boton numV={num} click={pulsar} />
    </div>
  );
}

function Boton({ numV, click }) {
  return <button onClick={click}>{numV} </button>;
}
