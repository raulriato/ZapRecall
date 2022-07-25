import React from "react";

export default function Answer({ answer, id, setCounter, counter, icons, setAnsweredIcons}) {
    const [recall, setRecall] = React.useState('')

    if (recall === 'no') {
        return (
            <div className='card no-recall'>
                <span>Pergunta {id}</span>
                <ion-icon name="close-circle-sharp"></ion-icon>
            </div>
        )
    } else if (recall === 'almost') {
        return (
            <div className='card almost-recall'>
                <span>Pergunta {id}</span>
                <ion-icon name="help-circle-sharp"></ion-icon>
            </div>
        )
    } else if (recall === 'zap') {
        return (
            <div className='card zap'>
                <span>Pergunta {id}</span>
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </div>
        )
    } else {
        return (
            <div className="opened-card">
                <p>{answer}</p>
                <div className="answer-buttons">
                    <button className="red" onClick={() => {
                        setRecall('no');
                        setCounter(counter + 1);
                        setAnsweredIcons([...icons, 'close-circle-sharp']);
                    }}>Não lembrei!</button>
                    <button className="orange" onClick={() => {
                        setRecall('almost');
                        setCounter(counter + 1);
                        setAnsweredIcons([...icons, "help-circle-sharp"]);
                    }}>Quase não lembrei</button>
                    <button className="green" onClick={() => {
                        setRecall('zap');
                        setCounter(counter + 1);
                        setAnsweredIcons([...icons, "checkmark-circle-sharp"]);
                    }}>Zap!</button>
                </div>
            </div>
        )
    }
}