import React, { useState } from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 1rem;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const ButtonCotizar = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 3s ease;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Formulario = () => {
  //initilization useState
  const [cotizador, setCotizador] = useState({
    marca: "",
    year: "",
    plan: "basico",
  });

  const [error, setError] = useState(false);

  //state value
  const { marca, year, plan } = cotizador;


  const changeInfo = e =>{

    setCotizador({
      ...cotizador,
      [e.target.name] : e.target.value
    })


  }

  const submitCotizador = e => {
    e.preventDefault();

    //evaluar campo

    //porcentaje marca;

    //porcentaje year;

    //porcentaje plan;
  };

  return (
    <form onSubmit={submitCotizador}>
      <Campo>
        <Label>Marca</Label>
        <Select 
        name = "marca"
        value={marca}
        onChange = {changeInfo}
        >
          <option value="">--Select--</option>
          <option value="americano">--Americano--</option>
          <option value="europeo">--Europeo--</option>
          <option value="asiatico">--Asiatico--</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select 
        name = "year"
        value={year}
         onChange = {changeInfo}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange = {changeInfo}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange = {changeInfo}
        />
        Completo
      </Campo>

      <ButtonCotizar type="button">Cotizar</ButtonCotizar>
    </form>
  );
};

export default Formulario;
