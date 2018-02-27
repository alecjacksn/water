var initialState = {
    mobile: null
}


const WIDTH_UPDATED = "WIDTH_UPDATED"


export function updateMobileWidth(tf) {
    if (window.innerWidth > 400) {
        console.log("REDUCER TRUE")
        return {
            type: WIDTH_UPDATED,
            payload: false
        }

    } else {
        return {
            type: WIDTH_UPDATED,
            payload: true
        }
    }
}


export default function reducer(state = initialState, action) {
    
    console.log("ACTION", action.type, "PATYLOAS", action.payload)
    switch (action.type) {
        case WIDTH_UPDATED:
            return Object.assign({}, state, { mobile: action.payload })
        default: return state;
    }
}
