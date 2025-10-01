import { useState } from 'react'
import './App.css'
import MyHeader from './components/MyHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
    </>
  )
}

export default App
