import FinishedRecall from "./FinishedRecall";

export default function Counter({ counter, icons }) {
    if (icons.length === 0) {
        return (
            <div className="counter">
                <p>{counter}/4 CONCLUÍDOS</p>
            </div>
        )
    } else if (icons.length < 4) {
        return (
            <div className="counter">
                <p>{counter}/4 CONCLUÍDOS</p>
                <div className="icons">
                    {icons.map((icon, index) => <ion-icon name={icon} key={index}></ion-icon>)}
                </div>
            </div>
        )
    } else {
        const notRecalled = icons.filter(recall => recall === 'close-circle-sharp');
        return (
        <div className="finished-recall">
            <FinishedRecall notRecalled={notRecalled} />
            <p>{counter}/4 CONCLUÍDOS</p>
            <div className="icons">
                {icons.map((icon, index) => <ion-icon name={icon} key={index}></ion-icon>)}
            </div>
        </div>
        )
    }
}