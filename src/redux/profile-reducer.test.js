import profileReducer, {createAddPostObj, deletePost} from "./profile-reducer";
let state = {
    posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
        { id: 1, likeCount: 2, text: 'I love Sasuke!' },
        { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
        { id: 3, likeCount: 15, text: 'I like team №7' }]
};

test('After adding new post length should be 5',()=>{
    let action = createAddPostObj("My new post");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
})

test('After deleting post length should be 3',()=>{
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.length).toBe(3);
})

test('After deleting post with wrong id nothing changed',()=>{
    let action = deletePost(1050);
    let newState = profileReducer(state, action);
    expect(newState.length).toBe(4);
})
