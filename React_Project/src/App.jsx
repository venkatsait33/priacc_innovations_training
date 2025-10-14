import './App.css'
import Calculator from './components/Calculator'
import HomePage from './components/foodApp/HomePage'
import Home from './components/Home'
import TodoApp from './components/todoApp'
import { Route, Routes } from 'react-router-dom'
import VendingMachine from './components/vendingMachine/VendingMachine'
import ContactForm from './components/contactForm/ContactForm'
import Index from './components/condetionalRendering_ListItems'
import UseStateHookTasks from './components/hooks_tasks/UseStateHookTasks'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoApp />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/food' element={<HomePage />} />
        <Route path='/vendingMachine' element={<VendingMachine />} />
        <Route path='/contactForm' element={<ContactForm />} />
        <Route path='/tasks' element={ <Index/>} />
        <Route path='/usestateHookTasks' element={<UseStateHookTasks />} />
      </Routes>

    </div>
  )
}

export default App
