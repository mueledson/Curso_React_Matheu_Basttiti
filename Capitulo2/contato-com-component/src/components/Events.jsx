import React from 'react'

export default function Events() {
    function handleClick (e){
        console.log(e)
        alert('You clicked me!')
    }

    const renderizar = (X) => {
        if (X) {
            console.log('renderizando')
        } else {
            console.log('também posso estar renderizando isso')
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleClick}>Clica aqui!</button>
        </div>
        {/* Funções Inline */}
        <div>
            <button onClick={() => console.log("Clicou")}>Clica aqui.</button>
        </div>

        <div>
            <button onClick={() => {
                console.log("=|")
            }}>Clica aqui?</button>
        </div>
        {renderizar(true)}
        {renderizar(false)}
    </div>
  )
}
