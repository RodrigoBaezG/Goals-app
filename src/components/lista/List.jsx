import Goal from './Goal.jsx';

const listaMock = [
    {
    icono: "📚",
    details: "Learn React",
    period: "week",
    events: 4,
    goal: 10,
    completed: 3
    },
    {
    icono: "📚",
    details: "Learn Python",
    period: "week",
    events: 5,
    goal: 20,
    completed: 5   
    },
    {
    icono: "📚",
    details: "Learn JavaScript",
    period: "week",
    events: 7,
    goal: 15,
    completed: 8    
    }
    
];


function List () {
    return ( 
            listaMock.map(goal => (<Goal {...goal} />))
     );
}

export default List ;