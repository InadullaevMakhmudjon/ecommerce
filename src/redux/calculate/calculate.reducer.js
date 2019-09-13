const InitialState = {
    number: 15,
}

export default (state = InitialState, action) => {
    switch(action.type) {
        case 'GET_MULtIPLIER':
            return {
                ...state,
                number: action.payload,
            }
        default:
            return state;
    }
}