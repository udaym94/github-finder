import { createContext, useReducer } from "react";
import githubReduceer from "./GithubReducer";


const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        isLoading: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(githubReduceer, initialState)

    return <GithubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}



export default GithubContext