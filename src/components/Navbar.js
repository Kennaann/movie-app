import { BiSearchAlt2, BiFilm } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { RiMovie2Fill } from 'react-icons/ri'
import { BsFillTvFill } from 'react-icons/bs'

function Navbar() {
    return (
        <>
            {/* NAV MOBILE */}
            <nav className='fixed bottom-0 right-0 left-0 z-30 border-t-[1px] border-slate-800 bg-[#020916] flex justify-evenly items-center text-2xl sm:text-3xl py-3 sm:py-6 text-slate-400 md:hidden'>
                <AiFillHome className='text-slate-200' />
                <BiSearchAlt2 />
                <RiMovie2Fill />
                <BsFillTvFill />
            </nav>

            {/* NAV DESK */}
            <nav className='hidden md:flex items-center py-4 shadow-md shadow-black/50 bg-slate-800 sticky top-0 z-30'>
                <div className='flex items-center pl-4'>
                    <BiFilm className='text-3xl text-amber-400' />
                    <h1 className='m-0 text-2xl'>See<span className='text-amber-400'>Movies</span></h1>
                </div>

                <ul className='flex space-x-4 ml-8 text-lg'>
                    <li className='flex items-center'>
                        <AiFillHome className='mx-1' /> Accueil
                    </li>
                    <li className='flex items-center'>
                        <BiSearchAlt2 className='mx-1' /> Recherche
                    </li>
                    <li className='flex items-center'>
                        <RiMovie2Fill className='mx-1' /> Films
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