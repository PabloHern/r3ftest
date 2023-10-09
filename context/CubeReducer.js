import { ADD_CUBE, REMOVE_CUBE, ROTATE_CUBE, ACTIVE_CUBE } from "./Types"

const CubeReducer = (state, action) => {
  switch (action.type) {
    case ADD_CUBE: {
      return {
        ...state,
        cubess: [...state.cubess, action.payload]
      }
    }
    default:
      return state;
  }
}
export default CubeReducer