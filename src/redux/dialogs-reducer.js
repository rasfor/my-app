const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  messages: [
    { id: 0, messageText: 'Hello', self: true },
    { id: 1, messageText: 'Yo', self: false },
    { id: 2, messageText: 'Watashi backa', self: true },
    { id: 3, messageText: 'kek', self: false },
    { id: 4, messageText: 'chebureck', self: true }
  ],
  newMessageText: '',
  contacts: [
    { id: 0, name: 'Hinata' },
    { id: 1, name: 'Sasuke' },
    { id: 2, name: 'Sakura' },
    { id: 3, name: 'Kakashi' }
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:{
      return {
        ...state,
        newMessageText:action.newText
      };
    }
    case SEND_NEW_MESSAGE:{
      let newId = state.messages.length;
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText:'',
        messages:[...state.messages,{ id: newId, messageText: body, self: true }]
      };
    }
    default:
      return state;

  }
}
export default dialogsReducer;