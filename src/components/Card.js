import React from "react";
import Question from "./Question";

export default function Card({question, id, answer}) {

    const [isTurned, setIsTurned] = React.useState(false)

    function turnCard(){
        setIsTurned(!isTurned)
    }
    return ( !isTurned ?
        <div className='card' onClick={turnCard}>
            <span>Pergunta {id}</span>
            <ion-icon name="play-outline"></ion-icon>
        </div> : <Question id={id} question={question} answer={answer} turnCard={turnCard} />
    )
}