import React from 'react'

const Input = () => {
  return (
    <form>
        <label htmlFor='message'>Enter your message</label>
        <input type='text' id='message' name='message'></input>
    </form>
  )
}

export default Input;