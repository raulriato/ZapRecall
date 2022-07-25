export default function Answer({ answer }) {
    return (
        <div className="opened-card">
            <p>{answer}</p>
            <div className="answer-buttons">
                <button className="red">Não lembrei!</button>
                <button className="orange">Quase não lembrei</button>
                <button className="green">Zap!</button>
            </div>
        </div>
    )
}