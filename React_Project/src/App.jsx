import './App.css'
import Calculator from './components/Calculator'
import HomePage from './components/foodApp/HomePage'
import Home from './components/Home'
import TodoApp from './components/todoApp'
import { Route, Routes } from 'react-router-dom'
import VendingMachine from './components/vendingMachine/VendingMachine'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoApp />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/food' element={<HomePage />} />
        <Route path='/vendingMachine' element={<VendingMachine />} />
      </Routes>

    </div>
  )
}

export default App
