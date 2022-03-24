import { useEffect } from 'react'

import { movieType } from '../api/tmdbApi'
import slider from '../api/slidersData'

import Slider from '../components/sliders/Slider'
import SliderLg from '../components/sliders/SliderLg'


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mb-[5rem] sm:mb-[6.5rem] md:mb-0'>
      {/* LARGE SLIDER */}
      <SliderLg type={movieType.now_playing} />

      {/* SLIDERS */}
      {
        slider && slider.map((s) =>
          <div key={s.title} className="home relative">
            <Slider key={s.title} type={s.type} category={s.category} title={s.title} genre={s.genre} />
          </div>
        )
      }
    </div>
  )
}

export default Home