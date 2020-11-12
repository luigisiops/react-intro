import React, {useState, useEffect} from 'react'

const GifsAdd = () => {
    const [gif, setGif] = useState("")

   useEffect(() => {
       const getList = async() => {
           const gifsList = await fetch('localhost:8000/favorite-gifs')
       }
   },[])

    return (
        <div>Add Page</div>
    )
}

export default GifsAdd