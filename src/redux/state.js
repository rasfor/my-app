let state = {
  profile: {
    comments: [{ likeCount: 10, message: 'Naruto is the best!', ava: 'https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg' },
    { likeCount: 2, message: 'I love Sasuke!', ava: 'https://i.pinimg.com/originals/60/36/4c/60364cef062ebd92733ac57be140e89d.jpg' },
    { likeCount: 0, message: 'Sakura - це кринж', ava: 'https://i.pinimg.com/originals/ca/9c/0b/ca9c0be06fe64562d9a51d53a18a3cb6.jpg' },
    { likeCount: 15, message: 'I like team №7', ava: 'https://phonoteka.org/uploads/posts/2021-05/1621946641_51-phonoteka_org-p-kakasi-khatake-art-krasivo-56.jpg' }]
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

export default state;