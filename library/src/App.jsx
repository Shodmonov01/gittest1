import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import Modal from './components/Modal'

function App() {
  const [showModal, setshowModal] = useState("")

  function openModal() {
    setshowModal("active")
  }

  function closeModal() {
    setshowModal("")
  }
  
  function addBook(e) {
    e.preventDefault();
    
  }

  return (
    <div>
    <Header />
    <MainBody clickEvent={openModal} />
    <Modal submitEvent={addBook} clickEvent={closeModal} active={showModal} />
    </div>
  )
}

export default App
