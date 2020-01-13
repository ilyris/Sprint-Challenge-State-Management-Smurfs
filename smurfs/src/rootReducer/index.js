export const initalState = {
    smurfs: [],
    newSmurf:
        {
          name: '',
          age: '',
          height: '',
        }
};
export const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_SMURFS':
            return {...state, smurfs: action.payload};
        case 'ADD_SMURFS':
            return {...state, smurfs:  action.payload};
        case 'SET_NEW_SMURF_NAME':
            return {...state, newSmurf:{
                ...state.newSmurf,
                name: action.payload
            }};
        case 'SET_NEW_SMURF_AGE':
            return {...state, newSmurf:{
                ...state.newSmurf,
                age: action.payload
            }};
        case 'SET_NEW_SMURF_HEIGHT':
            return {...state, newSmurf:{
                ...state.newSmurf,
                height: action.payload
            }};
        default: 
            return state;
    }
};