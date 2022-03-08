import { movieType } from '../../api/tmdbApi'
import slider from '../../api/slidersData'

import Slider from '../sliders/Slider'
import SliderLg from '../sliders/SliderLg'

function Home() {

  return (
    <div className='mb-[5rem] sm:mb-[6.5rem] md:mb-0'>
      {/* LARGE SLIDER */}
      <SliderLg type={movieType.now_playing} />

      {/* SLIDERS */}
      {
        slider && slider.map((s) =>
          <div key={s.title} className="relative">
            <Slider key={s.title} type={s.type} category={s.category} title={s.title} genre={s.genre} />
          </div>
        )
      }
    </div>
  )
}

export default Home