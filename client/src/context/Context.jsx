import { createContext, useEffect, useReducer } from "react";
import loginReducer from "./Reducer";

const Initial_State = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error:false,
};

export const Context = createContext(Initial_State);


export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(loginReducer, Initial_State);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return(
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}