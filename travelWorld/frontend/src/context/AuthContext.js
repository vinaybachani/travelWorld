import {createContext, useEffect, useReducer} from 'react';
import { json } from 'react-router-dom';
const initial_state = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')): null,
    loading: false,
    error: null
}

export const AuthContext = createContext(initial_state);
const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user: null,
                loading: false,
                error: null,
            };

            case "LOGIN_SUCCEESS" :
                return {
                    user: action.payload,
                    loading: false,
                    error: null
                }
            case "REGISTER_SUCCESS" :
                return {
                    user: null,
                    loading: false,
                    error: null
                }
            case "LOGOUT" :
                return {
                    user: null,
                    loading: false,
                    error: null
                }
            default :
            return state
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return <AuthContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
    }}>
        {children}

    </AuthContext.Provider>
}