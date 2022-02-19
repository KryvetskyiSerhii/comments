import classes from './Form.module.css'
import React, { useState } from 'react'


const Form = (props) => {
  const [data, setData] = useState({
    created_at: Date(),
    name: '',
    product_id: 30,
    text: '',
    updated_at: Date(),
    nameError: '',
    textError: ''
  })
  const [isPending, setIsPending] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const dataChange = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
    
 const validateFields = () => {
 let nameError = ''
 let textError = ''
 if (data.name.trim().length === 0) {
   nameError = 'Field is required'
 }
 if (data.text.trim().length === 0) {
   textError = 'Field is required'
 }
 if(nameError) {
   setData(nameError)
   return false
 }
 if(textError) {
   setData(textError)
   return false
 }
return true
 }


 const submit = async (e) => {
    e.preventDefault()
    const isValid = validateFields()
    if(isValid) {   
     setIsPending(true)
  try {
      let result = await fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          created_at: data.created_at,
          name: data.name,
          product_id: data.product_id,
          text: data.text,
          updated_at: data.updated_at,
          visible: 0
  })
      })
      setIsPending(false)
      setIsComplete(true)
    }
    catch(e) {
      console.log(e)
    }
  }

  }
  
  return (
        <div className={classes.form}>
          <form className={classes.form__block} onSubmit={(e) => submit(e)}>
            <div className={classes.name__block}>
              <input type="text" onChange={(e) => dataChange(e)}  value={data.name}  placeholder='Enter your name' className={classes.form__name} id='name'></input>
              <div className={classes.error}>{data.nameError}</div>
              </div>
              <textarea  onChange={(e) => dataChange(e)} value={data.text}  placeholder='Enter your comment' className={classes.form__comment}  id='text' />
              <div className={classes.error}>{data.textError}</div>
              <div className={classes.button__block}>
              <button type='submit' className={classes.form__button}>Add comment</button>
              {!isPending && !isComplete &&  <div></div>}
              {isPending && !isComplete && <div>Adding your comment...</div>}
              {!isPending && isComplete && <div>Comment was added</div>}
              </div>
          </form>
          
        </div>
      );
}

export default Form