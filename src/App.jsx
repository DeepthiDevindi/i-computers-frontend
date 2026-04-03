import './App.css'
import HomePage from '../pages/homePage'
import AdminPage from '../pages/adminPage'
import LoginPage from '../pages/loginPage'
import TestPage from '../pages/test'
import { Route , Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <div className = 'w-full h-screen border-[6px] flex justify-center items-center bg-primary text-secondary'>
        <Toaster position='top-right'/>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>

      </div>
    </>
  )
}

export default App
