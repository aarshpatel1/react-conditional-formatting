import { useState } from 'react'
import Key from './components/Key'
import Form from './components/Form'
import './App.css'

function App() {

  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="theme d-flex flex-column justify-content-center align-items-center" style={theme === "light" ? { background: "#fff", color: "#000" } : { background: "#000", color: "#fff" }}>
      <h1>Hello World !</h1>
      <button className='btn btn-primary' onClick={handleTheme}>{theme === "light" ? "dark" : "light"}</button>
      <Key />
      <Form />
    </div>
  )
}

export default App
