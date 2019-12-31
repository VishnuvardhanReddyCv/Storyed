import update from "immutability-helper";

export function appLogin(state = {},action) {
    let newState = state;
    switch(action.type){
        case 'LOGIN_FAILED':
            newState =  update(state, {
                loginStatus: { $set: action.status }
              });
              return newState;
        case 'UPDATE_CURRENT_USER':
            newState =  update(state, {
                currentUser: { $set: action.user}
              });
              return newState;
        default:
              return newState;
    }
}