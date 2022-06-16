import { renderPage } from "../render";

let state = {
  profile: {
    posts: [{ id:0, likeCount: 10, text: 'Naruto is the best!'},
    { id:1, likeCount: 2, text: 'I love Sasuke!' },
    { id:2, likeCount: 0, text: 'Sakura - це кринж'},
    { id:3, likeCount: 15, text: 'I like team №7' }]
  },
  dialogs: {
    messages: [
      { id: 1, messageText: 'Hello' },
      { id: 2, messageText: 'Yo' },
      { id: 3, messageText: 'Watashi backa' },
      { id: 4, messageText: 'kek' },
      { id: 5, messageText: 'chebureck' }
    ],

    contacts: [
      { id: 1, name: 'Hinata' },
      { id: 2, name: 'Sasuke' },
      { id: 3, name: 'Sakura' },
      { id: 4, name: 'Kakashi' }
    ]
  }

}

export let addPost=(postTest) => {
  let newId = state.profile.posts.length;
  let newPost =  {id:newId, likeCount:0, text:postTest} ;
  state.profile.posts.push(newPost);
  renderPage(state, addPost);
}

export default state;