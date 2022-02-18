import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/AuthContext"
import { AuthReducer } from "./auth/AuthReducer"
import AppRoutes from "./routers/AppRoutes"

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const Nutrifoot = () => {
    const [user, dispatch] = useReducer(AuthReducer, {}, init)
    useEffect(() => {
        if (!user) return
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRoutes />
        </AuthContext.Provider>)
}
