import { useReducer } from "react";
import { AuthContext } from "./Context.tsx";

const InitialState = {
    token: '',
    authenticate: false
};

function reducer(state, action) {
    switch (action.type) {
        case "add": {
            const newState = {
                token: action.token,
                authenticate: true
            };
            return newState;
        };

        default:
            throw new Error();
    };
};

function AuthMemory({children}) {
    const value = useReducer(reducer, InitialState);

    return ( 
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
     );
}

export default AuthMemory;