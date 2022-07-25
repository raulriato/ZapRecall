import React from "react"

export default function Screen(){

    const [screen, setScreen] = React.useState('EntryScreen')

    function iniciateRecall(){
        setScreen('RecallScreen')
    }

    if(screen === 'EntryScreen'){
        return (
            <div class="entry-screen">
            <img src="./images/entryzap.png" alt='' />
            <h1>ZapRecall</h1>
            <button onClick={iniciateRecall}>Iniciar Recall!</button>
        </div>
        )
    } else {
        return (
            <div class="recall-screen">
                <div class="title">
                    <img src="./images/gamezap.png" alt="" />
                    <h1>ZapRecall</h1>
                </div>
                <div class='questions'>
                    <div class='question'>
                        <span>Pergunta 1</span>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class='question'>
                        <span>Pergunta 2</span>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class='question'>
                        <span>Pergunta 3</span>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class='question'>
                        <span>Pergunta 4</span>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        )
    }
}