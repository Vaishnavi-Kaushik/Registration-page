import { useState } from 'react';
import './App.css';
import AuthForm from './assets/AuthForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthForm />
    </div>
  
  );
     
}

export default App;
