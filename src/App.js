import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const submitMessage = () => {
    setMessages(messages.concat(input))
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