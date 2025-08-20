import { createContext, useReducer } from "react";


const listaMock = [
    {
        id: 1,
        icon: "📚",
        details: "Learn React",
        period: "week",
        events: 4,
        goal: 10,
        completed: 3
    },
    {
        id: 2,
        icon: "📚",
        details: "Learn Python",
        period: "week",
        events: 5,
        goal: 20,
        completed: 5
    },
    {
        id: 3,
        icon: "📚",
        details: "Learn JavaScript",
        period: "week",
        events: 7,
        goal: 15,
        completed: 8
    }

];

const inicialState = {
    order: [],
    objects: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'add_goal': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            };
            return newState;
        };
        case 'create_goal': {
            const id = Math.random();
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = {...state};
            return newState;
        }
    };
};

    const goals = reducer(inicialState, { type: 'add_goal', goals: listaMock });

    


    console.log(reducer(inicialState, { type: 'add_goal', goals: listaMock }));

    export const Context = createContext(null);

    function Memory({ children }) {

        const [state, dispatch] = useReducer(reducer, goals);

        return (
            <Context.Provider value={[state, dispatch]}>
                {children}
            </Context.Provider>
        );
    }

    export default Memory;