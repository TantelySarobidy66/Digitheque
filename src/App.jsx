
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/stylePorteFolio.css"
import PgaeCourant from './page/PgaeCourant'
import LoginPage from './page/Pagelogin'


function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/page" element={<PgaeCourant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
