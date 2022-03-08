import axiosClient from "./axiosClient"

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    latest: 'latest',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing',
    discover: 'discover'
}

export const tvType = {
    latest: 'latest',
    popular: 'popular',
    top_rated: 'top_rated',
    discover: 'discover'
}

const tmdbApi = {
    moviesList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, params)
    },
    tvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosClient.get(url, params)
    },
    media: (categ, id) => {
        const url = category[categ] + '/' + id + '/videos'
        return axiosClient.get(url, { params: {} })
    },
    search: (params) => {
        const url = 'search/multi'
        return axiosClient.get(url, params)
    },
    details: (categ, id, params) => {
        const url = category[categ] + '/' + id
        return axiosClient.get(url, params)
    },
    images: (categ, id, params) => {
        const url = category[categ] + '/' + id + '/images'
        return axiosClient.get(url, params)
    },
    credits: (categ, id, params) => {
        const url = category[categ] + '/' + id + '/credits'
        return axiosClient.get(url, { params: {} })
    },
    similar: (categ, id, params) => {
        const url = category[categ] + '/' + id + '/similar'
        return axiosClient.get(url, { params: {} })
    },
    discoverMovie: (type, params) => {
        const url = movieType[type] + '/movie'
        return axiosClient.get(url, params)
    },
    discoverTv: (type, params) => {
        const url = tvType[type] + '/tv'
        return axiosClient.get(url, params)
    }
}

export default tmdbApi