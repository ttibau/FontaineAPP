import { createStore } from 'redux'

const INITIAL_STATE = {
    Fontaine: [],
}

// Reducer
function Fontaine(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_ANIME':
            return { ...state, Fontaine: [...state.Fontaine, action.title ]}
        default:
            return state
    }
}

const store = createStore(Fontaine)

export default store