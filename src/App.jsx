
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/stylePorteFolio.css"
import PgaeCourant from './page/PgaeCourant'


function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<PgaeCourant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
