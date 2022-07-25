import Card from "./Card";

export default function Cards() {

    const cards = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para __',
            answer: '7. passar diferentes informações para componentes'
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ];

    const shuffledcards = cards.sort(() => Math.random() -0.5);
    const cardsToTheGame = [];
    for(let i = 0; i < 4; i++){
        cardsToTheGame.push(shuffledcards[i]);
        cardsToTheGame[i].id = i+1;
    }
    return (
        <div className='cards'>
            {cardsToTheGame.map((card, index) => <Card key={index} question={card.question} answer={card.answer} id={card.id}  />)}
        </div>
    )
}