import React from 'react';
import { useEffect, useState } from 'react';

import Comment from './comment/Comment'
import Pagination from './comment/Pagination';
import classes from './Comments.module.css'


const  Comments = (props) => {
  const [users, setData] = useState([])
  const [pagination, setPag] = useState([])
  const [commentsVisible, setCommentsVisible] = useState(3)  

const showMoreComents = () => {
  setCommentsVisible(prevValue => prevValue + 3)
}
const fetchComments = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    setData(json.data)
    setPag(json.links)
   
}

useEffect(() => {   
  
fetchComments('https://jordan.ashton.fashion/api/goods/30/comments')
}, [])

return (
      <div className={classes.comments}>
        {users.slice(0, commentsVisible).map(elem => {
          return <Comment name={elem.name} message={elem.text} date={elem.updated_at} />
        })}
        <button className={classes.button} onClick={showMoreComents}>Show more</button>
        <div className={classes.pagination}>
        {pagination.map(elem => {
          return <Pagination number={elem.label} url={elem.url} fetch={fetchComments}/>
        })}
        </div>
        
      </div>
    );
  }
  
  export default Comments;