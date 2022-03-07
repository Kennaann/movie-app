import { movieType, category } from '../../api/tmdbApi'

import Slider from '../sliders/Slider'
import SliderLg from '../sliders/SliderLg'

function Home() {

  const moviesTrending = 'Les films populaires'
  const tvTrending = 'Les séries populaires'
  const upcoming = 'A venir'
  const moviesRated = 'Les films les mieux notés'
  const tvRated = 'Les séries les mieux notées'

  return (
    <div>
      {/* HOMEPAGE LARGE SLIDER */}
      <SliderLg type={movieType.now_playing} />

      {/* movie trending */}
      <div className="relative">
        <Slider type={movieType.popular} category={category.movie} title={moviesTrending} />
      </div>

      {/* tv trending */}
      <div className="relative">
        <Slider type={movieType.popular} category={category.tv} title={tvTrending} />
      </div>

      {/* UPCOMING  */}
      <div className="relative">
        <Slider type={movieType.upcoming} category={category.movie} title={upcoming} />
      </div>

      {/* movie top rated  */}
      <div className="relative">
        <Slider type={movieType.top_rated} category={category.movie} title={moviesRated} />
      </div>

      {/* tv top rated */}
      <div className="relative" >
        <Slider type={movieType.top_rated} category={category.tv} title={tvRated} />
      </div>
    </div>
  )
}

export default Home