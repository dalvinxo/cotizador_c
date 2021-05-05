import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, setresumen] = useState({
    cotizacion: 0,
    info: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [spinner, setSpinner] = useState(false);

  const { cotizacion, info } = resumen;

  return (
    <Fragment>
      <Contenedor>
        <Header titulo="Cotizador de seguros" />
        <ContenedorFormulario>
          <Formulario setresumen={setresumen} setSpinner={setSpinner}/>
          {spinner ? <Spinner /> : null}
          <Resumen datos={info} />
          {!spinner ? <Resultado cotizacion={cotizacion} /> : null}
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  );
}



export default App;
