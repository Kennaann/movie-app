import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { ImPlay2 } from 'react-icons/im'

import tmdbApi from "../../api/tmdbApi"
import apiConfig from "../../api/apiConfig"

import Moviedetail from "../pages/Moviedetail"

function CardLg({
    id,
    category
}) {

    const [details, setDetails] = useState()

    const getDetails = async () => {

        const params = {
            language: 'fr'
        }

        const response = await tmdbApi.details(category, id, { params })
        setDetails(response)
    }

    useEffect(() => {
        getDetails()
    }, [])


    let landscapePoster500 = null
    let landscapePoster780 = null
    let landscapePoster1280 = null
    let landscapePosterOriginal = null

    let imgPath = null

    // console.log(details.backdrop_path)

    if (details) imgPath = details.backdrop_path

    if (imgPath) {
        landscapePoster500 = apiConfig.w500Image(details.backdrop_path)
        landscapePoster780 = apiConfig.w780Image(details.backdrop_path)
        landscapePoster1280 = apiConfig.w1280Image(details.backdrop_path)
        landscapePosterOriginal = apiConfig.originalImage(details.backdrop_path)
    }

    return (
        <div>
            {
                details &&
                <div className="my-0 rounded-md overflow-hidden relative">

                    {imgPath && <img src={landscapePoster500} alt="" className="sm:hidden" />}
                    {imgPath && <img src={landscapePoster780} alt="" className="hidden sm:block md:hidden" />}
                    {imgPath && <img src={landscapePoster1280} alt="" className="hidden md:block lg:hidden" />}
                    {imgPath && <img src={landscapePoster1280} alt="" className="hidden lg:block" />}

                    <div className="card-lg-description">
                        <div className="absolute inset-0 bg-gradient-to-t from-black lg:from-[#020a17] opacity-80 lg:opacity-100"></div>

                        <div className="absolute inset-0 flex flex-col justify-end">
                            <div className="m-3 lg:m-7 lg:ml-11">

                                {details.title && <h2 className="font-semibold text-white text-sm sm:text-lg lg:text-2xl" >{details.title}</h2>}

                                <div className="flex wrap text-gray-300">
                                    {
                                        details.genres &&
                                        details.genres.map((g) =>
                                            <p key={g.id} className="text-[0.6rem] sm:text-sm lg:text-lg px-1 first:pl-0 border-r-[1px] last:border-r-0 border-gray-300">{g.name}</p>
                                        )
                                    }
                                </div>

                                <Link to={`/${category}/${id}`} element={<Moviedetail />}>
                                    <div className="flex items-center space-x-1 mt-2">
                                        <ImPlay2 className="text-white sm:text-lg lg:text-2xl" />
                                        <p className="text-[0.6rem] sm:text-base lg:text-lg text-gray-300"> Voir le trailer</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            }


        </div>

    )
}

export default CardLg