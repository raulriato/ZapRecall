import React from "react"
import Answer from "./Answer"

export default function Question({ question, answer, id, setCounter, counter, icons, setAnsweredIcons }) {

    const [seeAnswer, setSeeAnswer] = React.useState(false)

    function showAnswer() {
        setSeeAnswer(!seeAnswer)
    }

    return (!seeAnswer ?
        <div className="opened-card">
            <p>{question}</p>
            <img src="./images/Vector.svg" alt="" onClick={showAnswer} />
        </div> : <Answer answer={answer} id={id} setCounter={setCounter} counter={counter} icons={icons} setAnsweredIcons={setAnsweredIcons} />
    )
}