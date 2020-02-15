import { createStore } from 'redux'

const INITIAL_STATE = {
    Fontaine: [],
    getProductModalVisible: false
}

// Reducer
function Fontaine(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'SHOW_MODAL_GETPRODUCT':
            return { ...state, getProductModalVisible: true }
        case 'CLOSE_MODAL_GETPRODUCT':
            return { ...state, getProductModalVisible: false }
        default:
            return state
    }
}

const store = createStore(Fontaine)

export default store