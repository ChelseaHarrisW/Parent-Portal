import {BrowserRouter, Route, Routes} from 'react-router-dom'
//styles
import './App.css'
//pages and components and SpecialLink

import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      
      <div className='container'>
        <Navbar/>
        <Routes>
         <Route exact path='/' element={<Dashboard/>} />
           
          <Route  path='/create' element={<Create/>} />
           
          <Route path='/login' element={<Login/>} />
          
          <Route exact path='/projects/:id' element={<Project/>} />
          
          <Route exact path='/signup' element={ <Signup/>} />
          

        </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App


// pages for routing

// -dashboard
// -LOGIN
// -signup
// -create
// -project
//  for the completion of MVP finance tracker