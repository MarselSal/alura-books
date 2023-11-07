import Input from "../Input";
import styled from "styled-components";
// import para usar estados
import { useState } from "react";
import { livros } from './dadosPesquisa';

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
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa() {
    // utilizando de useState, temos na const o estado e o nome da funcao q muda ele
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
                                        // como valor inicial
    console.log(livrosPesquisados);
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="escreva sua proxima leitura"
                // funcao chamada quando user sai do campo
                onBlur={ evento => {
                    // seta o value do evento no texto digitado
                    const textoDigitado = evento.target.value
                    // filtra os livros do array que tem o texto digitado
                    const resultadoPesquisa = livros.filter(
                        // coloca no array livros que incluem o texto digitado pelo usuario
                        livro => livro.nome.includes(textoDigitado)
                    )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
                // vai setar o evento no livrosPesquisados
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </Resultado>
            ) ) }
        </PesquisaContainer>
        
    )
}

export default Pesquisa;
