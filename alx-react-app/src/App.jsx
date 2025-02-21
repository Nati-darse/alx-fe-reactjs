import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'
import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <WelcomeMessage />
     <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

     
      {/* <Header />
      <MainContent />
      <Footer /> */}
    </>
  )
}

export default App;

