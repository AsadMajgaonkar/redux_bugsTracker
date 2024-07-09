
import { projectAdded } from "./actionTypes";

let lastIndex = 0;

export default function projectReducer(state=[], action){
    if(action.type == projectAdded.type){
        return [...state, 
            {   id: ++lastIndex,
                projectName: action.payload.projectName
            }
        ]
    }
    return state;
}