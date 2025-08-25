export async function RequestGoals() {
    const response = await fetch("/goals.json");
    const goals = await response.json();
    return goals;
}

export async function RequestGoal() {
    const response = await fetch("/goal.json");
    const goal = await response.json();
    return goal;
}

export async function CreateGoal() {
    const response = await fetch("/goal.json");
    const goalCreated = await response.json();
    console.log("Goal created!", goalCreated);
    return goalCreated;
}

export async function UpdateGoal() {
    const response = await fetch("/goal.json");
    const updatedGoal = await response.json();
    console.log("Goal updated", updatedGoal);
    return updatedGoal;
}

export async function DeleteGoal() {
    const response = await fetch("/goal.json");
    const deletedGoal = await response.json();
    console.log("Goal deleted", deletedGoal.id);
    return deletedGoal.id;
}
