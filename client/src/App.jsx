import { useState } from 'react'
import './App.css'
import Register from './routes/Register'
import Dashboard from './routes/Dashboard';
import Flash from './components/Flash';

function App() {
  const [user, setUser] = useState(false);
  const [flash, setFlash] = useState(false);

  return (
    <div>
      {
        flash && <Flash message={flash}/>
      }
      {
        !user
          ?
          <Register setUser={setUser} setFlash={setFlash}/>
          :
          <Dashboard />
      }
    </div>
  )
}

export default App
