import React from "react"
import Cards from "./Cards"

export default function Screen() {

    const [screen, setScreen] = React.useState('EntryScreen')

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
                <Cards />
            </div>
        )
    }
}