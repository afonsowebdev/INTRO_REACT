import React from 'react'

function Challeng() {

    const x = 10;
    const y = 20;
    

    const handleClick = () => {
        const sum = x + y;
        alert(`A soma de ${x} e ${y} é: ${sum}`);
    }
    

  return (
    <div>
        A: {x} <br />
        B: {y} <br />
        <button onClick={handleClick}>Clique aqui para ver a soma</button>
    </div>
  )
}

export default Challeng