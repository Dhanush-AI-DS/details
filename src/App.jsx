import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/FormComponents/FormComponents.css'
import FormComponents from './components/FormComponents/FormComponents'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormComponents/>
    </>
  )
}

export default App
