const ADD = 'ADD'

export const addMessage = (message) => {
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

export default messageReducer