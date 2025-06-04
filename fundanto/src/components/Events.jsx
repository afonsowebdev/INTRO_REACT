
{
    /* 
    Para criar uma função que retorne um componente React chamado Events, 
    você pode seguir o exemplo abaixo. Este componente pode ser usado para 
    exibir uma lista de eventos ou qualquer outra informação relacionada a eventos.
    */
}

const handleMyEvent = (e) => {
    console.log(e);
}
const Events = () => {

    return (
        <div>
           <div>
             <button onClick={handleMyEvent}>Clique aqui</button>
           </div>
           <div>
             <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
           </div>
        
        </div>
        
    );
}

export default Events;