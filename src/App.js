import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Moviedetail from './components/pages/Moviedetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home exact />} />
          <Route path="/:category/:movieId" element={<Moviedetail />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
