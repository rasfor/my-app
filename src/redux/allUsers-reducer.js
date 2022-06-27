const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let ininitializeState = {
    users:[
        {id:0, name:'Timur', age:23, status:'Doter', city:'Kazan', country:'Russia', followed:false},
        {id:1, name:'Babahan', age:24, status:'Stalker', city:'Kazan', country:'Russia',followed:true},
        {id:2, name:'Zulfiya', age:23, status:'Pie', city:'Kazan', country:'Russia', followed:false},
        {id:3, name:'Gulshatik', age:19, status:'Booklover', city:'Kazan', country:'Russia', followed:false}
    ]
};

const allUsersReducer = (state = ininitializeState, action) => {
    switch(action) {
        default:
            return state;
    }
}

export const followAC=()=>{
    return {
        type: FOLLOW
    }
}

export const unfollowAC = ()=>{
    return {
        type: UNFOLLOW
    }
}

export default allUsersReducer;