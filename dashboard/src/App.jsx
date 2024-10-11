
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home';
import { DataProvider } from '../src/context/Datacontext';
import './App.css'

function App() {
  

  return (
    <>
    <DataProvider>
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
      </div>
      </DataProvider>
    </>
  )
}

export default App
