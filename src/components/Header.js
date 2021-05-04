import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26c6DA;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`;

const TituloTexto = styled.h1`
    font-size: 2rem;
    text-align: center;
    font-family: 'Slabo 27px', serif;
    margin:0;
`;

const Header = ({titulo}) => {
    return (  
        <ContenedorHeader>
            <TituloTexto>{titulo}</TituloTexto>
        </ContenedorHeader>
    );
}
 
export default Header;