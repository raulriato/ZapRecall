import React from "react";

export default function Answer({ answer, id }) {
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
                    <button className="red" onClick={() => setRecall('no')}>Não lembrei!</button>
                    <button className="orange" onClick={() => setRecall('almost')}>Quase não lembrei</button>
                    <button className="green" onClick={() => setRecall('zap')}>Zap!</button>
                </div>
            </div>
        )
    }
}