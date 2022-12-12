import React from "react";

export default (props) => {
    
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    const aprovado = aleatorio >= 200 ? 'Acima' : 'Abaixo'
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Minimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Maximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
            <p>
                <strong>Valor logico: </strong> {aprovado}
            </p>

        </div>

    )
}