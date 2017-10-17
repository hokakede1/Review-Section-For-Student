var initialState = {
    name: "Huy"
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case "CHANGE_NAME": {
            return {...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}

export function showName(fullname){
    return {
        payload: fullname,
        type: "CHANGE_NAME"
    }
}
