import axios from 'axios'
import React, { useEffect } from 'react'
import requests from '../Requests'

const Main = () => {

    const [movies, setMovies] = React.useState([])

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data)
        })
    }, [])

    console.log(movies)



  return (
    <div>

    </div>
  )
}

export default Main