import './App.css'
import Img1  from './assets/logo192 - Copia.png'
import ManageData from './components/ManageData'

function App() {

  return (
    <>
      <h1>Avançando com React</h1>
      {/* Imagem na pasta public */}
      <div>
        <img src="/img1.jpg" alt="" />
      </div>
      {/* Imagem na pasta assets */}
      <div>
        <img src={Img1} alt="" />
      </div>
      <ManageData/>
    </>
  )
}

export default App
