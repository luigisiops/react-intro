import React, {useState} from 'react'
import '../styles/styles.css'

const Gifs = (props) => {
    
    const [image, setImage] = useState({})

    const selectGif = (url, id) => {
        document.getElementById(id).style.cssText = 'border: 3.5px solid red'
        setImage({
            ...image,
            [id]: url
        })
        console.log(image)
    }

    const gifData = props.data.map((gif)=> {
        return(
            <div id = {gif.id} key = {gif.id}>
                <img onClick = {()=> selectGif(gif.media[0].gif.url, gif.id)} className = "gif-image" src={gif.media[0].gif.url} alt="loading..."></img>
            </div>
        )
    })
    return (
        <div className = "gif-container">
            {gifData}
        </div>
    )
}

export default Gifs