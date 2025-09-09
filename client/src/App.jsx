import { useState } from 'react'
import './App.css'
import Register from './routes/Register'
import Dashboard from './routes/Dashboard';

function App() {
  const [user, setUser] = useState(false);

  return (
    <div>
      {
        user
          ?
          <Register setUser={setUser}/>
          :
          <Dashboard />
      }
    </div>
  )
}

export default App
