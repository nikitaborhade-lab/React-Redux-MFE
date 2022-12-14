import * as actionTypes from "./action-types"
const initialState = {count : 0}

export const reducer = (state = initialState, action) =>{

 switch(action.type){
    case actionTypes.INCREAMENT:
        return{
            ...state,
            count : state.count +1
        }

    case actionTypes.CLEAR:
        return{
            ...state,
            count : 0
        }
    default:
        return state    
 }
}