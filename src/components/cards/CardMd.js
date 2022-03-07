import apiConfig from '../../api/apiConfig'

import { BsFillPlayBtnFill } from 'react-icons/bs'

import { Link } from "react-router-dom"

import Moviedetail from "../pages/Moviedetail"



function CardMd({
    id,
    poster,
    category
}) {

    const image = apiConfig.w500Image(poster)

    return (
        <>
            <div className='card relative shrink-0 w-36 sm:w-52 h-[213px] sm:h-[308px] mx-1 transition-transform duration-300'>
                <img src={image} alt=""
                    className='h-full object-cover rounded-md'
                />
                <div className='background absolute inset-0 bg-gray-900 bg-opacity-50 flex-col flex justify-center items-center invisible opacity-0 transition-opacity duration-500'>
                    <Link to={`/${category}/${id}`} element={<Moviedetail />} >
                        <BsFillPlayBtnFill className='play scale-[0.002] text-4xl text-amber-400 hover:text-amber-300 transition-all duration-100' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardMd