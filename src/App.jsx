import './App.css'
import HomePage from '../pages/homePage'
import AdminPage from '../pages/adminPage'
import LoginPage from '../pages/loginPage'
import { Route , Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <div className = 'w-full h-screen border-[6px] flex justify-center items-center bg-primary text-secondary'>
        
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/login' element={<LoginPage />} />

        </Routes>

      </div>
    </>
  )
}

export default App
