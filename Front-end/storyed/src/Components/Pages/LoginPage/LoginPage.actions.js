export function getLoginFailedAction(){
    return {
        type : 'LOGIN_FAILED',
        data : {
            status : 'FAILED',
            isLoggedIn : false
        }
    };
}


export function getLoginSuccessAction(){
    return {
        type : 'LOGIN_SUCCESS',
        data : {
            status : 'SUCCESS',
            isLoggedIn : true
        }
    };
}

export function getUpdateUserAction(user){
    return {
        type : 'UPDATE_CURRENT_USER',
        user
    };
}