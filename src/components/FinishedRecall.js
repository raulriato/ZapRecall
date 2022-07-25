export default function FinishedRecall({notRecalled}){
    return (notRecalled.length === 0 ?
        <div className="congrats">
            <div className="main">
                <img src='./images/party.svg' alt="" />
                <strong>Parabéns</strong>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </div> 
        : 
        <div className="not-yet">
            <div className="main">
                <img src='./images/sad.svg' alt="" />
                <strong>Putz...</strong>
            </div>
            <p>Ainda faltam alguns... Mas não desanime</p>
        </div>
    )
}