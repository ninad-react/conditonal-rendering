import { useState } from 'react';
import './App.css';
// import UserGreeting from './UserGreeting';

function App() {

  const[show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  }

  return (
    <div className="App">
      {/* <UserGreeting isLoggedIn={false} userName="REact"/> */}
      <p>Button to toggle - showing ON/OFF field</p>
      <label>
        Toggle:
        <input type='checkbox' checked={show} onChange={handleChange} />
      </label>

      <p>{show ? "ON" : "OFF"}</p>
    </div>
  );
}

export default App;