import React from "react";
import Cards from "./Cards";
import Counter from "./Counter";

export default function Screen() {

    const [counter, setCounter] = React.useState(0);
    const [screen, setScreen] = React.useState('EntryScreen');
    const [answeredIcons, setAnsweredIcons] = React.useState([]);

    function iniciateRecall() {
        setScreen('RecallScreen')
    }

    if (screen === 'EntryScreen') {
        return (
            <div className="entry-screen">
                <img src="./images/entryzap.png" alt='' />
                <h1>ZapRecall</h1>
                <button onClick={iniciateRecall}>Iniciar Recall!</button>
            </div>
        )
    } else {
        return (
            <div className="recall-screen">
                <div className="title">
                    <img src="./images/gamezap.png" alt="" />
                    <h1>ZapRecall</h1>
                </div>
                <Cards setCounter={setCounter} counter={counter} icons={answeredIcons} setAnsweredIcons={setAnsweredIcons} />
                <Counter counter={counter} icons={answeredIcons} />
            </div>
        )
    }
}