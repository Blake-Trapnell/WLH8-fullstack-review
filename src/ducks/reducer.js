//initialState
const initialState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: [],

}


//Action constants
const SET_USER = "SET_USER"


//action builderes
export function setUser (user) {
    return {
        type: SET_USER,
        payload: user
    }
}


//reducer
export default (state = initialState, action) => {
    const {type, payload} = action
        switch (type) {
            case SET_USER:
                const {username, email} = payload
                return {...state, username, email}
            default : return state
        }
}