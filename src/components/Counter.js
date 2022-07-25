export default function Counter({ counter, icons }) {
    return (icons === 0 ?
        <div className="counter">
            <p>{counter}/4 CONCLUÍDOS</p>
        </div>
        :
        <div className="counter">
            <p>{counter}/4 CONCLUÍDOS</p>
            <div className="icons">
                {icons.map((icon, index) => <ion-icon name={icon} key={index}></ion-icon>)}
            </div>
        </div>
    )
}