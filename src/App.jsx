import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import EditorPage from './components/EditorPage';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import OnlineIDE from './components/OnlineIDE';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
      <Toaster position='top-right'></Toaster>
    </div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/editor/:roomId' element={<EditorPage />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<Signup />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/onlineide' element={<OnlineIDE />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
