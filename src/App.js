import React, { useState } from 'react'
import { addMessage } from './reducers/messageReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state)
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const submitMessage = () => {
    dispatch(addMessage(input))
    setInput('')
  }

  return(
    <div>
      <input onChange={handleChange} />
      <button onClick={submitMessage}>Submit</button>
      <ul>
        {messages.map(message =>
          <li>{message}</li>
        )}
      </ul>
    </div>
  )
}

export default App