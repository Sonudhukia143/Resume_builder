import { useState } from 'react'
import './App.css'
import Register from './routes/Register'
import Dashboard from './routes/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {
        !user || user != null
          ?
          <Register setUser={setUser}/>
          :
          <Dashboard />
      }
    </div>
  )
}

export default App
