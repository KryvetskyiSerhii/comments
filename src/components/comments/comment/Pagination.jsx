import classes from './Pagination.module.css'

const Pagination = (props) => {
    
    
    return (
        
        <div className={classes.pagination}>
            
            <div className={classes.pag__item}><button onClick={() => {props.fetch(props.url)}} className={classes.button}>{props.number} </button></div>
            
        
        </div>
    )
        
}

export default Pagination