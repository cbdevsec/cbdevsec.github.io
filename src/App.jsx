import './App.css'
import Err404 from './Pages/Err404'
import Here1 from './Pages/Here1'
import Here2 from './Pages/Here2'
import Here3 from './Pages/Here3'
import Here4 from './Pages/Here4'
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Here1 />} />
        <Route path="projects" element={<Here2 />} />
        <Route path="resume" element={<Here3 />} />
        <Route path="about" element={<Here4 />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
