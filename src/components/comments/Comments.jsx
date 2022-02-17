import React from 'react';
import { useEffect, useState } from 'react';

import Comment from './comment/Comment'
import classes from './Comments.module.css'


const  Comments = (props) => {
  const [users, setData] = useState([])
    
  const fetchComments = async () => {
    const url = 'https://jordan.ashton.fashion/api/goods/30/comments'
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    setData(json)
     
}

useEffect(() => {   
  
fetchComments()
}, [])

return (
      <div className={classes.comments}>
        {users.data.map(elem => {
          return <Comment name={elem.name} message={elem.text} date={elem.date} />
        })}
      </div>
    );
  }
  
  export default Comments;