
import QuizForm from './container/QuizForm/QuizForm'
import './app.scss'
import { useState } from 'react'

function App() {
  const [Auth, setAuth] = useState(false)

  return (
    <>

      <div className='main-container'>

        <QuizForm setAuth={setAuth} Auth={Auth} />
      </div>
    </>
  );
}

export default App;
