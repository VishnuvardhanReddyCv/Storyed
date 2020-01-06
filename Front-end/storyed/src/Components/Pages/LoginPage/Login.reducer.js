import update from "immutability-helper";

export function appLogin(state = {},action) {
    let newState;
    switch(action.type){
        case 'LOGIN_FAILED':
            newState =  update(state, {
                loginStatus: { $set: action.status },
                isLoggedIn : { $set: false}
              });
              return newState;
        case 'LOGIN_SUCCESS':
                newState =  update(state, {
                    loginStatus: { $set: action.status },
                    isLoggedIn : { $set: true}
                  });
                  return newState;
        case 'UPDATE_CURRENT_USER':
            newState =  update(state, {
                currentUser: { $set: action.user}
              });
              return newState;
        default:
              return state;
    }
}