
import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action){
    if(action.type==actions.bugAdded.type){
        return [...state, {
            id: ++lastId,
            description : action.payload.description,
            resolved: false
        }]
    }

    else if (action.type==actions.bugRemoved.type){
        return state.filter(bug => bug.id != action.payload.id)
    }

    else if(action.type==actions.bugResolved.type){
        return state.map(bug => bug.id!=action.payload.id? bug : {...bug, resolved:true})
    }

    return state;
}