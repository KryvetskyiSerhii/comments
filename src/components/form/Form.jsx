import classes from './Form.module.css'


const Form = (props) => {
    return (
        <div className={classes.form}>
          <form className={classes.form__block}>
              <input type="text"  placeholder='Enter your name' className={classes.form__name} ></input>
              <textarea placeholder='Enter your comment' className={classes.form__comment}  />
              <button type='submit' className={classes.form__button}>Add comment</button>
          </form>
          
        </div>
      );
}

export default Form