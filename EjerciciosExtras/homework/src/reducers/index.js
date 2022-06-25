import { GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_COMMENTS_POST } from "../actions";

const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS: return{

    }
    case GET_ALL_POSTS: return{
      
    }
    case GET_ALL_USERS_POST: return{
      
    }
    case GET_ALL_COMMENTS_POST: return{
      
    }
    
    default:
      return state;
  }
}