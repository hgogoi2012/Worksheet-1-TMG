import Navbar from './container/Navbar/Navbar'
import PdfContainer from './container/PdfContainer/PdfContainer'
import QuizForm from './container/QuizForm/QuizForm'
import './app.scss'
import { useState } from 'react'

function App() {
  const [Auth, setAuth] = useState(false)
  const [PDF, setPDF] = useState(false)
  return (
    <>
      <Navbar Auth={Auth} PDF={PDF} setPDF={setPDF} />
      <div className='main-container'>
        <div className='desktop'>
          <PdfContainer Auth={Auth} />
        </div>
        <QuizForm setAuth={setAuth} Auth={Auth} PDF={PDF} setPDF={setPDF} />
      </div>
    </>
  );
}

export default App;
