export function getLoginFailedAction(){
    return {
        type : 'LOGIN_FAILED',
        status : 'FAILED'
    };
}


export function getLoginSuccessAction(){
    return {
        type : 'LOGIN_SUCCESS',
        status : 'SUCCESS'
    };
}

export function getUpdateUserAction(user){
    return {
        type : 'UPDATE_CURRENT_USER',
        user
    };
}