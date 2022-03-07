import { useState, useEffect } from 'react'

import tmdbApi, { movieType, category } from '../../api/tmdbApi'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper'

// Import Swiper styles
import "swiper/css"
import 'swiper/css/autoplay';

// override some swiper style
import '../items.css'

import CardLg from '../cards/CardLg'


function SliderLg(props) {

    const [nowPlaying, setNowPlaying] = useState();
    const getnowPlaying = async () => {

        const params = {
            language: 'fr'
        }
        const response = await tmdbApi.moviesList(props.type, { params })

        setNowPlaying(response.results.splice(0, 5))
    }

    useEffect(() => {
        getnowPlaying()
    }, [])

    return (
        <div className='swipper-lg overflow-hidden py-2 md:py-3 lg:pb-14'>
            <Swiper
                modules={[Autoplay]}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                speed={500}
                autoplay={{
                    delay: 5000
                }}

                slidesPerView={1.2}

                breakpoints={{
                    768: {
                        slidesPerView: 1.6,
                        // spaceBetween: 20
                    }
                }}
            >

                {
                    nowPlaying &&
                    nowPlaying.map((n) =>
                        <SwiperSlide key={n.id} >
                            <CardLg key={n.id} id={n.id} category={category.movie} />
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    )
}

export default SliderLg