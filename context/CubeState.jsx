import { useReducer, useEffect } from "react"
import CubeContext from "./CubeContext"
import CubeReducer from "./CubeReducer"
import { ADD_CUBE, REMOVE_CUBE, ROTATE_CUBE, ACTIVE_CUBE } from "./Types"
import { Clickbox } from "@/components/Clickbox"
const CubeState = (({ children }) => {
  const initalState = {
    cubess: [],
    activeCube: 0
  };
  const addCube = (position) => {
    dispatch({
      type: ADD_CUBE, payload:
        (
          < Clickbox position={position} ></Clickbox>
        )
    });
  }
  const [state, dispatch] = useReducer(CubeReducer, initalState);
  return (
    <CubeContext.Provider value={{ cubess: state.cubess, addCube }}>
      {children}
    </CubeContext.Provider>
  )
})
export default CubeState