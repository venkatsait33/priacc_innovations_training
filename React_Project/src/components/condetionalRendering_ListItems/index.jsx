import React from 'react'
import LoginLogoutView from './LoginLogoutView'
import DarkModeToggle from './DarkModeToggle'
import ShowHidePassword from './ShowHidePassword'
import ProductList from './ProductList'
import TodoList from './TodoList'
import StudentsResultList from './StudentsResultList'

const Index = () => {
  return (
      <div>
          <LoginLogoutView />
          <DarkModeToggle />
          <ShowHidePassword />
          <ProductList />
          <TodoList />
          <StudentsResultList />
    </div>
  )
}

export default Index