import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import Contador from './components/Ejemplos/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <NavBar/>
          <ItemListContainer saludo={"Bienvenidos"} />
          <Contador/>
        </div>
  )
}

export default App
