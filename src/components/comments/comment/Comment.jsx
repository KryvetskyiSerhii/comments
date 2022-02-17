import classes from './Comment.module.css'

function Comment(props) {
    return (
      
        <div className={classes.comment}>
            <div className={classes.header}>
                <div className={classes.header__name}>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" />
                    <div className={classes.name}>{props.name}</div>
                </div>
                <div className={classes.date}>{props.date}</div>
            </div>
            <div className={classes.message}>{props.message}</div>
        
        </div>
      
    );
  }
  
  export default Comment;