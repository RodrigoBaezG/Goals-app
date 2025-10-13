import { useReducer } from "react";
import { AuthContext } from "./Context.tsx";

const InitialState = {
    token: '',
    authenticate: false
};

function reducer(state, action) {
    switch (action.type) {
        case "add": {
            console.log("Adding token", action.token);
            const jwtString = action.token.token; 
            const newState = {
                token: jwtString,
                authenticate: true
            };
            console.log("New state", newState);
            return newState;
        };

        default:
            return state;
    };
};

function AuthMemory({children}) {
    const value = useReducer(reducer, InitialState);

    return ( 
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
     );
}

export default AuthMemory;