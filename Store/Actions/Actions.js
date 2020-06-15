import { CHANGE_NAME } from './ActionTypes'
export const changeName =(name)=>{ 
    return {
        type: CHANGE_NAME,
        assignedName:name
    }
}