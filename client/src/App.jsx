import { useState } from 'react'
import './App.css'
import Register from './routes/Register'
import Dashboard from './routes/Dashboard';

function App() {
  const [user,setUser] = useState(null);

  return (
    <>
    {
      // user || user != null
      // ?
      //     <Register />
      //     :
          <Dashboard />
    }
    </>
  )
}

export default App
