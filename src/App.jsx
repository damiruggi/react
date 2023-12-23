import React, { useState } from 'react'
import './App.css'
import './style.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {
  
return (
  <>
  <NavBar/>
  <ItemListContainer listas="Esto es una lista"/>
  </>
)

}
export default App
