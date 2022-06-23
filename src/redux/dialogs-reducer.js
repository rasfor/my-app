const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  messages: [
    { id: 1, messageText: 'Hello', self: true },
    { id: 2, messageText: 'Yo', self: false },
    { id: 3, messageText: 'Watashi backa', self: true },
    { id: 4, messageText: 'kek', self: false },
    { id: 5, messageText: 'chebureck', self: true }
  ],
  newMessageText: '',
  contacts: [
    { id: 1, name: 'Hinata' },
    { id: 2, name: 'Sasuke' },
    { id: 3, name: 'Sakura' },
    { id: 4, name: 'Kakashi' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_NEW_MESSAGE:
      let newId = state.messages.length;
      let newMessage = { id: newId, messageText: state.newMessageText, self: true };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    default:
      return state;

  }
}
export default dialogsReducer;