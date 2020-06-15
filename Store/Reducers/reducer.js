import { CHANGE_NAME } from '../Actions/ActionTypes'
import initialState from '../InitialState'

const reducer = (state = initialState,action) =>{
     switch(action.type){
        case CHANGE_NAME : return {
            ...state,name:action.assignedName
        }
        default: return state;
    }

}

export default reducer