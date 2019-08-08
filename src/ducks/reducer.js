//initialState
const initialState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: [],

}


//Action constats


//action builderes


//reducer
export default (state = initialState, action) => {
    const {type, payload} = action
        switch (type) {
            default : return state
        }
}