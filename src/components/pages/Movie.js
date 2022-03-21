import React, { useEffect, useState } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi'

import Select from 'react-select'

import Card from '../cards/Card'

function Movie() {

    const [genres, setGenres] = useState()
    const [genre, setGenre] = useState()

    const [movies, setMovies] = useState()
    const [page, setPage] = useState(1)

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

    const getMovies = async () => {
        const params = {
            language: "fr",
            with_genres: genre && genre,
            page: page
        }

        const response = await tmdbApi.discoverMovie(movieType.discover, { params })

        if (!movies) setMovies(response.results)
        else setMovies(movies.concat(response.results))
    }

    // incrémente le nombre de pages quand l'utilisateur est en pied de page
    const incrementPages = () => {
        window.onscroll = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                setTimeout(() => setPage(page + 1), 500)
            }
        }
    }

    // TODO 
    // Les films sont affiché par genre avec en genre par défaut le premier genre de la liste
    // Quand je change de genre, je n'affiche que la page 1 puis process pagination

    useEffect(() => {
        getGenres()
        getMovies()
        incrementPages()
    }, [page, genre])

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'chocolate', label: 'Chocolate' },
    // ]

    const customstyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '9999px',
            borderStyle: 'none',
            backgroundColor: state.isFocused ? 'rgb(15, 23, 42)' : 'rgb(51, 65, 85)',
            boxShadow: 'none',
            width: '150px',
            minHeight: 'fit-content'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 8px'
        }),
        input: (provided) => ({
            ...provided,
            margin: '0'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgb(156, 163, 175)'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            margin: '-4px'
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'rgb(15, 23, 42)'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'rgb(51, 65, 85)' : 'rgb(15, 23, 42)',
            paddingTop: '3px',
            paddingBottom: '3px'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'rgb(248 250 252)'
        })
    }

    return (
        <div className='mb-28 md:mb-4 mx-4 lg:mx-16 bg-slate'>
            <div className='flex items-end space-x-6 my-4'>
                <h1 className='text-3xl md:text-4xl font-semibold'>Films</h1>
                {genres &&
                    <Select
                        defaultValue={genres[0]}
                        options={genres}
                        styles={customstyles}
                        isSearchable={false}
                        placeholder='Genres...'
                        onChange={e => setGenre(e.value)}
                    />
                }
            </div>
            <div className='grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-5'>
                {movies && movies.map((m) =>
                    <Card key={m.id} id={m.id} poster={m.poster_path} category={category.movie} dimentions={null} />
                )}
            </div>

        </div>
    )
}

export default Movie