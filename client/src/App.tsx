import React from 'react'
import SignUp from './components/auth/forms/signup'
import SignIn from './components/auth/forms/signIn'
import Rootarea from './root/Rootarea'
import './index.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public Routes */}
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/login-in' element={<SignIn />}></Route>

        {/* private Routes */}
        <Route element={<Rootarea />}>
    


        </Route>
      </Routes>
    </main>
  )
}

export default App
