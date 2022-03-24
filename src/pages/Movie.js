import React, { useEffect, useState, useRef } from 'react'
import tmdbApi, { category, movieType } from '../api/tmdbApi'

import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import SelectDropdown from '../components/SelectDropdown'
import Loading from '../components/lazyloading/Loading'
import Grid from '../components/grids/Grid'

function Movie() {

    const [genres, setGenres] = useState()
    const [genre, setGenre] = useState()
    const [movies, setMovies] = useState()
    const [page, setPage] = useState(1)
    const [loaded, setLoaded] = useState(false)
    const [scrollVisible, setScrollVisible] = useState()
    const prevGenreRef = useRef()

    const getGenres = async () => {
        const params = {
            language: 'fr'
        }
        const response = await tmdbApi.genres(category.movie, params)

        setGenres(
            response.genres.map((g) => {
                return { value: g.id, label: g.name }
            })
        )
    }

    const updateGenre = (e) => {
        setGenre(e.value)
    }

    // Quand je change de genre, je n'affiche que la page 1 puis process pagination
    let getMovies = async () => {

        const genreResponse = await tmdbApi.genres(category.movie, { language: 'fr' })
        const defaultGenre = genreResponse.genres[0].id

        const params = {
            language: "fr",
            with_genres: defaultGenre,
            page: page
        }
        const response = await tmdbApi.discoverMovie(movieType.discover, { params })

        if (!movies) {
            setMovies(response.results)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } else setMovies(movies.concat(response.results))

        setLoaded(true)
    }
    if (prevGenreRef.current !== genre) {
        getMovies = async (isSubscribed) => {
            const params = {
                language: "fr",
                with_genres: genre && genre,
                page: page
            }
            const response = await tmdbApi.discoverMovie(movieType.discover, { params })

            setMovies(response && response.results)
            setLoaded(true)
        }
    }

    // incrémente le nombre de pages quand l'utilisateur est en pied de page
    const incrementPages = () => {
        window.onscroll = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                setTimeout(() => {
                    setPage(page + 1)
                }, 300)
            }
        }
    }

    const toggleScrollVisibility = () => {
        if (window.pageYOffset > 1000) setScrollVisible(true)
        else setScrollVisible(false)
    }

    useEffect(() => {
        getGenres()
        getMovies()
        incrementPages()
        window.addEventListener("scroll", toggleScrollVisibility);
        prevGenreRef.current = genre

        return () => {
            window.removeEventListener("scroll", toggleScrollVisibility)
        }
    }, [page, genre])


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const scrollVisibleStyle = {
        opacity: '1',
        transform: 'scale(1)'
        // display: 'block'
    }

    const scrollInvisibleStyle = {
        opacity: '0',
        transform: 'scale(0.002)'
        // display: 'none'
    }

    return (
        <>
            {!loaded ? <Loading /> :
                <div className='mb-16 md:mb-4 mx-4 lg:mx-16'>

                    <div className='flex items-end space-x-6 my-4'>
                        <h1 className='text-3xl md:text-4xl font-semibold'>Films</h1>
                        <SelectDropdown genres={genres} updateGenre={updateGenre} />
                    </div>

                    <Grid media={movies && movies} category={category.movie} />

                    <div
                        style={scrollVisible ? scrollVisibleStyle : scrollInvisibleStyle}
                        className='p-1 md:p-2 bg-amber-400 text-2xl text-slate-100 rounded-full w-fit fixed bottom-[4.5rem] md:bottom-2 lg:bottom-[45px] right-[7px] lg:right-[45px] shadow-md hover:cursor-pointer transition-all duration-200'
                        onClick={() => scrollToTop()}
                    >
                        <MdOutlineKeyboardArrowUp />
                    </div>
                </div>
            }
        </>
    )
}

export default Movie