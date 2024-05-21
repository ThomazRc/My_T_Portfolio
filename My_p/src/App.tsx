import './App.css'
import { UseForm } from './components/Userform'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <>
    <title>Hora de Codar - Home</title>
    <meta name='description' content='Aprenda a programar'/>
    <h1>1 - Actions</h1>
    <UseForm />
    </>
  )
}

export default App
