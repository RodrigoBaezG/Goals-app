import type { GoalType } from "../types/Goal.ts";

export async function RequestGoals(token: string) : Promise<GoalType[]> {
    if (!token) {
        throw new Error("Authentication token is required.");
    }
    const response = await fetch("/api/goals", {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // <-- CLAVE: Envío del JWT
            'Content-Type': 'application/json'
        }
    });
    const goals: GoalType[] = await response.json();
    return goals;
}

export async function RequestGoal(id: number): Promise<GoalType> {
    const response = await fetch(`/api/goals/${id}`);
    const goal: GoalType = await response.json();
    return goal;
}

export async function CreateGoal(goal: GoalType): Promise<GoalType> {
    const response = await fetch("/api/goals", {
        method: "POST",
        body: JSON.stringify(goal),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    if (!response.ok) { 
        // Lanza un error para que pueda ser capturado por el try/catch en Details.jsx
        // Lee el cuerpo de la respuesta para obtener el mensaje de error.
        const errorBody = await response.json();
        // El error en el console.log muestra 'el valor nulo...', usa ese mensaje si existe
        throw new Error(errorBody.message || errorBody.error || "Fallo en la creación del objetivo"); 
    }
    const goalCreated: GoalType = await response.json();
    console.log("Goal created!", goalCreated);
    return goalCreated;
}

export async function UpdateGoal(goal: GoalType): Promise<GoalType> {
    const response = await fetch(`/api/goals/${goal.id}`, {
        method: "PUT",
        body: JSON.stringify(goal),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    const updatedGoal: GoalType = await response.json();
    console.log("Goal updated", updatedGoal);
    return updatedGoal;
}

export async function DeleteGoal(id: number): Promise<void> {
    const response = await fetch(`/api/goals/${id}`, {
        method: "DELETE"
    }
    );
    console.log("Goal deleted", id);
}
