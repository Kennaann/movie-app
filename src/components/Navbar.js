import { BiSearchAlt2, BiFilm } from 'react-icons/bi'

function Navbar() {
  return (
    <div>
        <div className='flex p-2 shadow-md shadow-black/50 bg-slate-800 sm:p-4'>
            <div className='flex items-center'>
                <BiFilm className='text-xl sm:text-2xl md:text-3xl text-amber-400' />
                <h1 className='m-0 text-lg sm:text-xl md:text-2xl'>See<span className='text-amber-400'>Movies</span></h1>
            </div>
            {/* <div className='flex sm:mr-3 md:mr-0'>
                <input type="search" name="search" id="search" placeholder='Tapez votre recherche...' 
                    className='w-80 py-1 px-3 rounded-full bg-slate-600 outline-none border-2 border-transparent focus:border-slate-400 transition-all'
                />
                <button type="submit">
                    <BiSearchAlt2 className='-translate-x-8 text-lg text-slate-400'/>
                </button>
            </div>
            <div className='hidden sm:mr-8 md:mr-16 md:block'>     
                <p className='text-transparent'>vide</p>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar