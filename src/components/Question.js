export default function Question({question, answer, turnCard}){
    return (
        <div className="opened-card" onClick={turnCard}>
            <p>{question}</p>
            <img src="./images/Vector.svg" alt="" />
        </div>
    )
}