import React from 'react'
import '../styles/main.css'


const articleContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nec nisi vel blandit. Integer dui dolor, 
dignissim venenatis sodales ut, faucibus nec enim. Vestibulum vel lectus mattis, tristique risus in, dapibus nibh. 
Quisque vel ipsum non metus rhoncus viverra quis vel arcu. Aliquam sapien libero, molestie vel suscipit eget, 
cursus ac ex. Nam aliquam at urna ac tincidunt. Proin cursus et quam at pulvinar.`

const Reviews = () => {
    return(
        <div className = "review-container">
            <h1 className = "review-header">Curse of the Current Reviews</h1>
            <p className = "review-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nec nisi vel blandit. Integer dui dolor, 
                dignissim venenatis sodales ut, faucibus nec enim. Vestibulum vel lectus mattis, tristique risus in, dapibus nibh. 
                Quisque vel ipsum non metus rhoncus viverra quis vel arcu. Aliquam sapien libero, molestie vel suscipit eget, 
                cursus ac ex. Nam aliquam at urna ac tincidunt. Proin cursus et quam at pulvinar. 
                Proin aliquam euismod auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae;Vivamus odio enim, convallis et tempus ut, eleifend et enim. Aliquam malesuada ipsum at euismod f
                ringilla. Etiam convallis eleifend fringilla. Integer fermentum, dolor ut efficitur commodo, nunc massa venenatis 
                tortor, non vestibulum metus urna sed odio. Donec id aliquet felis. Sed finibus nisi nec arcu elementum, ut iaculis 
                elit mollis. Nunc gravida diam arcu, ac pharetra neque vulputate vel. Quisque ullamcorper sit amet diam in gravida.
            </p>
        </div>
    )
}

const Articles = (props) => {
    return (
        <div className = "articles-container">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.content}
            </p>
        </div>
    )
}

const Comments = (props) => {
    return(
        <div className = "comments-container">
            <p className = "comments-comment-number">{props.comments} comments</p>
            <p className = "comments-like-number">{props.likes} likes</p>
        </div>
    )
}

const MainContainer = () => {
        return(
            <div className = "mainContainer">
                <Reviews/>
                <Articles title = "Hello WatchKit" content = {articleContent}/>
                <Comments comments = "12" likes = "100"/>
                <Articles title = "Introduction to Swift" content = {articleContent}/>
                <Comments comments = "15" likes = "45"/>
            </div>
        )
    }

export default MainContainer


    

