import { createContext, useReducer } from "react";


const listaMock = [
    {
        id: 1,
        icon: "📚",
        details: "Learn React",
        period: "week",
        events: 4,
        goal: 10,
        deadline:'',
        completed: 3
    },
    {
        id: 2,
        icon: "📚",
        details: "Learn Python",
        period: "week",
        events: 5,
        goal: 20,
        deadline:'',
        completed: 5
    },
    {
        id: 3,
        icon: "📚",
        details: "Learn JavaScript",
        period: "week",
        events: 7,
        goal: 15,
        deadline:'',
        completed: 8
    }
];

// const memory = localStorage.getItem('goals');
// const inicialState = memory
//     ? JSON.parse(memory)
//     : {
//         order: [],
//         objects: {}
//     };

const initialState = {
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
            // localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'create_goal': {
            const id = action.goal.id;            /*String(Math.random());*/
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            // localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
            // localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'delete': {
            const id = action.id;
            const newOrder = state.order.filter(item => item !== id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects
            };
            console.log(state);
            // localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        default:
            throw new Error();
    };
};

// reducer(inicialState, { type: 'add_goal', goals: listaMock });


// console.log(reducer(inicialState, { type: 'add_goal', goals: listaMock }));

export const Context = createContext(null);

function Memory({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Memory;