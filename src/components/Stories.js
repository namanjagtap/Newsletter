import React from 'react'
import { useGlobalContext } from '../context/context'

export default function Stories() {
    // let isLoading = true;
    const { hits, isLoading, removePost } = useGlobalContext();


    if(isLoading)
      return <><h1>Loading...</h1></>
    
    return (
    <>
        <div className='stories-div'>
          {hits.map((currPost) => {
            const {title, author, objectID, num_comments, url} = currPost;
            return(
              <>
                <div className='card' key={objectID}>
                  <h2>{title}</h2>
                  <p>
                    <span>By {author}</span> | <span>{num_comments} comments</span>
                  </p>
                  <div className='card-button'>
                    <a href={url} target='_blank' rel="noopener noreferrer" >Read More</a>
                    <a href="#removed" onClick={() => removePost(objectID)} >Remove</a>
                  </div>
                </div>
              </>
            ) 
          })}
        </div>
        <div className='scroll-container'>
          <a href='#top'><img src='https://img.icons8.com/?size=512&id=26192&format=png' alt='Scroll Top' /></a>
        </div>
    </>
  )
}
