import React from "react";

import "./App.css";

import Card from "./layout/Card";

import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Aleatorio from "./components/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import MeuComponent from "./components/basicos/MeuComponent";


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#07 - Repetiçao" color="#FF4C65">
                        <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#06 - Component com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />                       
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />                        
                    </Familia>
                </Card>

                <Card titulo="#05 -  Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={600} />
                </Card>

                <Card titulo="#04 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#03 - Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente!"
                        subtitulo="Situação do Aluno"
                        aluno="Pedro Silva" nota={9.3}
                    />
                </Card>

                <Card titulo="#02 - Primeiro component" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="#01 - Meu component" >
                    <MeuComponent />
                </Card>

            </div>

        </div>
    )
}