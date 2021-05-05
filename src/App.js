import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

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
    cotizacion : 0,
      info: {
        marca: "",
        year: "",
        plan: "",
      }

  })

  const {info} = resumen;



  return (
    <Fragment>
      <Contenedor>
        <Header titulo="Cotizador de seguros" />

        <ContenedorFormulario>
          <Formulario
            setresumen={setresumen}
          />

          <Resumen
            datos={info}
          />
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  );
}

export default App;
