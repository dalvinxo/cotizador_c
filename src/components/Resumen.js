import React, { Fragment } from "react";
import styled from '@emotion/styled'
import {primeraMayuscula} from '../helpers'

const contenedorRes = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: white;
    margin-top: 2rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <contenedorRes>
      <h2>Resumen Cotización</h2>
      <ul> 
          <li>Marca: {primeraMayuscula(marca)} </li>
          <li>year: {year}</li>
          <li>plan: {primeraMayuscula(plan)}</li>
      </ul>
    </contenedorRes>
  );
};


export default Resumen;