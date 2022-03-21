import { BiSearchAlt2, BiFilm } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { RiMovie2Fill } from 'react-icons/ri'
import { BsFillTvFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'

function Navbar() {
    return (
        <>
            {/* NAV MOBILE */}
            <nav className='fixed bottom-0 right-0 left-0 z-30 border-t-[1px] border-slate-800 bg-[#020916] flex justify-evenly items-center text-2xl sm:text-3xl py-3 sm:py-6 text-slate-400 md:hidden'>
                <Link to='/' element={<Home />}>
                    <AiFillHome className='text-slate-200' />
                </Link>
                <BiSearchAlt2 />
                <Link to='/movie' element={<Movie />}>
                    <RiMovie2Fill />
                </Link>
                <BsFillTvFill />
            </nav>

            {/* NAV DESK */}
            <nav className='hidden md:flex items-center py-4 shadow-md shadow-black/50 bg-slate-800 sticky top-0 z-30'>
                <Link to='/' element={<Home />}>
                    <div className='flex items-center pl-4'>
                        <BiFilm className='text-3xl text-amber-400' />
                        <h1 className='m-0 text-2xl'>See<span className='text-amber-400'>Movies</span></h1>
                    </div>
                </Link>

                <ul className='flex space-x-4 ml-8 text-lg'>
                    <li className='flex items-center py-2 overflow-hidden'>
                        <Link
                            to='/'
                            element={<Home />}
                            className="
                                flex items-center 
                                relative text-slate-200 
                                after:content-[''] 
                                after:w-full after:h-[2px] 
                                after:bg-slate-200 
                                after:absolute after:-bottom-[2px] 
                                after:-translate-x-[101%] hover:after:translate-x-0
                                after:opacity-0 hover:after:opacity-100 
                                after:transition-all after:duration-200
                            "
                        >
                            <AiFillHome className='mr-1' /> Accueil
                        </Link>
                    </li>
                    <li className='flex items-center'>
                        <BiSearchAlt2 className='mx-1' /> Recherche
                    </li>
                    <li className='flex items-center py-2 overflow-hidden'>
                        <Link
                            to='/movie'
                            element={<Movie />}
                            className="
                                flex items-center 
                                relative text-slate-200 
                                after:content-[''] 
                                after:w-full after:h-[2px] 
                                after:bg-slate-200 
                                after:absolute after:-bottom-[2px] 
                                after:-translate-x-[101%] hover:after:translate-x-0
                                after:opacity-0 hover:after:opacity-100 
                                after:transition-all after:duration-200
                            "
                        >
                            <RiMovie2Fill className='mx-1' /> Films
                        </Link>
                    </li>
                    <li className='flex items-center'>
                        <BsFillTvFill className='mx-1' /> Séries
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar