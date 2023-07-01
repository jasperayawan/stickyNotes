import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { ContextProvider } from './context/Context' 

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </BrowserRouter> 
      </ContextProvider>
    </>
  )
}

export default App
