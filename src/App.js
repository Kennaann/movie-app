import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Moviedetail from './components/pages/Moviedetail'
import Movie from './components/pages/Movie'

function App() {

  const location = useLocation()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home exact />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/:category/:movieId" element={<Moviedetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
