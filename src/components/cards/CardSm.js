import apiConfig from '../../api/apiConfig'

import { BsFillPlayBtnFill } from 'react-icons/bs'

import { Link } from "react-router-dom"

import Moviedetail from "../pages/Moviedetail"



function CardSm({
  id,
  poster,
  category
}) {

  const image = apiConfig.w300Image(poster)

  return (
    <>
      <div className='card relative shrink-0 w-24 sm:w-28 md:w-36 mx-1 md:mx-2 h-36 sm:h-[168px] md:h-56 lg:h-72 lg:w-48 transition-transform	duration-300'>
        <img src={image} alt=""
          className='h-full object-cover rounded-sm md:rounded-lg'
        />
        <div className='background absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center invisible opacity-0 transition-opacity duration-300'>
          <Link to={`/${category}/${id}`} element={<Moviedetail />} >
            <BsFillPlayBtnFill className='play scale-[0.002] text-2xl sm:text-3xl md:text-5xl text-amber-400 hover:text-amber-300 transition-all duration-300' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardSm