import * as actionTypes from "../actions/actionTypes";

initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: payload,
          image: {
            uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === payload;
        })
      };
    case actionTypes.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default reducer;
