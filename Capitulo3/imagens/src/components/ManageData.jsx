import React, { useState } from 'react'

const ManageData = () => {
    // let  someData = 10;

    // console.log(someData);

    const [number, setNumber] = useState(15);

  return (
    <div>
        {/* JEITO ERRADO */}
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Valor</button>
      </div>
      {/* JEITO CERTO */}
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o Estate</button>
      </div>
    </div>
  )
}

export default ManageData
