import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Navbar'
import { SidebarProvider } from './components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import Main from './components/Main'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import News from './pages/News'
import { useAuth } from './context/authContext'

function App() {
 const token=useAuth();
  return (
    <SidebarProvider
    style={{
      "--sidebar-width": "16rem",
      "--sidebar-width-mobile": "20rem",
    }}
    
    >
   <Router>
    <div className="flex">
    <Header/>
    {token && <AppSidebar />}
    
    <Main/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>
    </div>
    </Router>
    </SidebarProvider>
  )
}

export default App
