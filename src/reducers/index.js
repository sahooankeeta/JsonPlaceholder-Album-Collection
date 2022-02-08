import * as actionType from "./../helpers/constants";

const initialState = {
  albums: [],
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALBUMS: //FETCH ALL GET_ALBUMS
      return {
        ...state,
        albums: action.payload.albums,
      };
    case actionType.SET_TOTAL_PAGES: //HANDLE TOTAL PAGES
      return {
        ...state,
        totalPages: action.payload,
      };
    case actionType.SET_LOADING: //HANDLE LOADING EVENT
      return { ...state, isLoading: action.payload };
    case actionType.SET_ERROR:
      return { ...state, error: action.payload };
    case actionType.CREATE_ALBUM:
      return {
        ...state,
        albums: [action.payload, ...state.albums],
      };
    case actionType.DELETE_ALBUM:
      return {
        ...state,
        albums: state.albums.filter((item) => item.id !== action.payload),
      };
    case actionType.UPDATE_ALBUM:
      return {
        ...state,
        albums: state.albums.map((album) =>
          album.id === action.payload.id ? action.payload : album
        ),
      };
    default:
      return state;
  }
};
export default reducer;
