import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const profile = {
    title: 'My Profile',
    description: 'This is my profile description.',
    image: reactLogo,
  }
  
  return (
    <>
      <Header />
      <div className="card-container">
        <Card title={profile.title} description={profile.description} image={profile.image}/>
        <Card title={profile.title} description={profile.description} image={profile.image}/>
        <Card title={profile.title} description={profile.description} image={profile.image}/>
        <Card title={profile.title} description={profile.description} image={profile.image}/>
        <Card title={profile.title} description={profile.description} image={profile.image}/>
        <Card title={profile.title} description={profile.description} image={profile.image}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
