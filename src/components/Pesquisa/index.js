import Input from "../Input";
import styled from "styled-components";
// import para usar estados
import { useState } from "react";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;

`


function Pesquisa() {
    // utilizando de useState, temos na const o estado e o nome da funcao q muda ele
    const {textoDigitado, setTextoDigitado} = useState('')
                                        // como valor inicial
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="escreva sua proxima leitura"
                // funcao chamada quando user sai do campo
                onBlur={ evento => console.log(evento.target.value)}
            />
        </PesquisaContainer>
        
    )
}

export default Pesquisa;
