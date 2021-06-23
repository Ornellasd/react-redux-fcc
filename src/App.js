import React, { useState } from 'react'
import { createStore } from 'redux'

const ADD = 'ADD'

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message]
    default:
      return state
  }
}

const store = createStore(messageReducer)

const App = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const submitMessage = () => {
    store.dispatch({ 
      type: 'ADD',
      message: input 
    })
    setInput('')
  }

  return(
    <div>
      <input onChange={handleChange} />
      <button onClick={submitMessage}>Submit</button>
      <ul>
        {store.getState().map(message =>
          <li>{message}</li>
        )}
      </ul>
    </div>
  )
}

export default App