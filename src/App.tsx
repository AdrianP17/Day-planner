import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <h1 className='text-2xl underline text-green-500 font-bold'>asasdfasd</h1>
    </BrowserRouter>
  )
}

export default App
