import React from 'react';
import SignIn from './components/signIn';
import SignUp from './components/signup';
import './index.css';
import { Route, Routes} from 'react-router-dom'

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public Routes */}
                <Route path='/sign-up' element={<SignUp/>}></Route>
                <Route path='/sign-in' element={<SignIn/>}></Route>


                {/* private Routes */}

            </Routes>
        </main>
    )
}

export default App;