import { types } from "../types/Types"

export const AuthReducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false,
            }
        case types.register:
            return {
                ...action.payload,
                ...state
            }
        default:
            return state
    }
}