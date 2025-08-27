export interface GoalType {
    id: string | number;
    icon: React.ReactNode;
    details: string;
    period: string;
    events: number;
    goal: number;
    completed: number;
};