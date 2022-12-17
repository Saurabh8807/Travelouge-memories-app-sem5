import { FETCH_ALL,FETCH_BY_SEARCH,LIKE, CREATE, UPDATE, DELETE, FETCH_BY_NAME } from '../constants/actionTypes';

export default (state = {posts:[]}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state, 
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
      case FETCH_BY_NAME:
        return { ...state, posts: action.payload };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE:
      return [...state, action.payload];
    case LIKE:
      return {...state,posts:state.posts.map((post)=>(post._id=== action.payload._id ? action.payload:post))}
      case UPDATE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

// import {  FETCH_BY_SEARCH,LIKE,FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// export default (state = {posts:[]}, action) => {
//   switch (action.type) {
        
//     case FETCH_ALL:
//       return {
//         posts :action.payload.data,
//         currentPage: action.payload.currentPage,
//         numberOfPages:action.payload.numberOfPages,
//         ...state,
//       };
//     case FETCH_BY_SEARCH:  
//       return {...state,posts: action.payload};
//       case LIKE:
//       return {...state,posts:state.posts.map((post._id === action.payload._id ? action.payload:post))}
//     case CREATE:
//       return {...state,posts:[...state.posts, action.payload]};
//     case UPDATE:
//       return {...state,posts:state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
//     case DELETE:
//       return {...state,posts:state.posts.filter((post) => post._id !== action.payload)};
//     default:
//       return state;
//   }
// };