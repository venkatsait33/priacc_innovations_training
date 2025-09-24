import './App.css'
import Calculator from './components/Calculator'
import Home from './components/Home'
import TodoApp from './components/todoApp'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoApp />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>

    </div>
  )
}

export default App
