import type { GoalType } from "../types/Goal.ts";

export async function RequestGoals() : Promise<GoalType[]> {
    const response = await fetch("/goals.json");
    const goals: GoalType[] = await response.json();
    return goals;
}

export async function RequestGoal(id: number): Promise<GoalType> {
    const response = await fetch("/goal.json");
    const goal: GoalType = await response.json();
    return goal;
}

export async function CreateGoal(goal: GoalType): Promise<GoalType> {
    const response = await fetch("/goal.json");
    const goalCreated: GoalType = await response.json();
    console.log("Goal created!", goalCreated);
    return goalCreated;
}

export async function UpdateGoal(goal: GoalType): Promise<GoalType> {
    const response = await fetch("/goal.json");
    const updatedGoal: GoalType = await response.json();
    console.log("Goal updated", updatedGoal);
    return updatedGoal;
}

export async function DeleteGoal(id: number): Promise<void> {
    const response = await fetch("/goal.json");
    const deletedGoal = await response.json();
    console.log("Goal deleted", deletedGoal.id);
}
