import { useState } from 'react'
import './App.css'
import MyHeader from './components/MyHeader'
import MyMain from './components/MyMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
      <MyMain />
    </>
  )
}

export default App
