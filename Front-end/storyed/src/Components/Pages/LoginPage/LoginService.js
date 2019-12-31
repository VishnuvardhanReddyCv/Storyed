import { postData } from "../../../api";

export function userLogin(loginDetails) {
    return  postData('/auth/login',loginDetails);
}