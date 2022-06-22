const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_NEW_MESSAGE:
      let newId = state.messages.length;
      let newMessage = { id: newId, messageText: state.newMessageText, self: true };
      state.messages.push(newMessage);
      return state;
    default:
      return state;

  }
}
export default dialogsReducer;