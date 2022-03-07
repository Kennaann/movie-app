// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

function Moviedetail() {

    // const params = useParams()
    // const id = params.movieId

    // const [details, setDetails] = useState([])
    // const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=273b3631cd2eec9fe3cb080a711dcc44&language=fr`
    // const detailsReq = axios.get(detailsUrl)

    // const [images, setImages] = useState([])
    // const imagesUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=273b3631cd2eec9fe3cb080a711dcc44&language=fr`
    // const imagesReq = axios.get(imagesUrl)

    // const [similars, setSimilars] = useState([])
    // const similarsUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=273b3631cd2eec9fe3cb080a711dcc44&language=fr&page=1`
    // const similarsReq = axios.get(similarsUrl)

    // useEffect(() => {
    //     axios.all([detailsReq, imagesReq, similarsReq]).then(axios.spread((...responses) => {
    //         setDetails(responses[0].data)
    //         setImages(responses[1].data)
    //         setSimilars(responses[2].data)
    //     })).catch(errors => {
    //         console.log(errors)
    //     })
    // }, [])

    // console.log([similars, details, images])

    return (
        <div>

        </div>
    )
}

export default Moviedetail