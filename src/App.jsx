import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Events from './pages/events/Events';
import News from './pages/News';

import { SidebarProvider } from './components/ui/sidebar';
import Header from './components/Navbar';
import { AppSidebar } from './components/AppSidebar';
import Main from './components/Main';
import { useAuth } from './context/authContext';
import SpecificEvent from './pages/events/[event]';


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
    {/* {token && <AppSidebar />} */}
    <AppSidebar />
    <Main/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/events/:event' element={<SpecificEvent/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>
    </div>
    </Router>
    </SidebarProvider>
  );
}

export default App;

