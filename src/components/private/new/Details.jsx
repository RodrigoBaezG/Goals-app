import React, { useEffect, useState } from "react";
import DetailsCss from "./Details.module.css";
import { useContext } from "react";
import { GoalsContext } from "../../../memory/Context.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { CreateGoal, DeleteGoal, UpdateGoal } from "../../../services/Goals.ts";

function Details() {
    const { id } = useParams();

    const [form, setForm] = useState({
        details: "",
        events: 1,
        period_: "week",
        icon: "📚",
        goal: 1,
        deadline: "",
        completed: 0,
    });

    const [state, dispatch] = useContext(GoalsContext);

    const { details, events, period_, icon, goal, deadline, completed } = form;

    const onChange = (e, prop) => {
        setForm({ ...form, [prop]: e.target.value });
    };

    useEffect(() => {
        const goalMemory = state.objects[id];
        if (!id) return;
        if (!goalMemory) {
            return navigate("/404");
        }
        setForm(goalMemory);
    }, [id]);

    const frecuencyOptions = ["day", "week", "month", "year"];
    const iconOptions = ["📚", "💻", "🎨", "🏋️‍♂️", "💦", "✈️"];

    const navigate = useNavigate();

    const crear = async () => {
        const newGoal = await CreateGoal(form);
        dispatch({
            type: "create_goal",
            goal: newGoal,
        });
        navigate("/list");
    };

    const cancel = () => {
        navigate("/list");
    };

    const update = async () => {
        const updatedGoal = await UpdateGoal(form);
        dispatch({ type: "update", goal: updatedGoal });
        navigate("/list");
    };

    const deleteGoal = async () => {
        await DeleteGoal(form.id);
        dispatch({ type: "delete", id: form.id });
        navigate("/list");
    };

    return (
        <div className="flex justify-center items-center">
            <div className={'card ' + DetailsCss.details}>
                <form className="p-4">
                    <label className="label">
                        Details
                        <input
                            className="input"
                            type="text"
                            placeholder="Type your new goal"
                            value={details}
                            onChange={(e) => onChange(e, "details")}
                        />
                    </label>
                    <label className="label">
                        Deadline
                        <input
                            className="input"
                            type="date"
                            value={deadline}
                            onChange={(e) => onChange(e, "deadline")}
                        />
                    </label>
                    <label className="label">
                        Frecuency
                        <select
                            value={period_}
                            className="input"
                            onChange={(e) => onChange(e, "period_")}
                        >
                            {frecuencyOptions.map((period) => (
                                <option key={period} value={period}>
                                    {period}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="label">
                        Events
                        <input
                            className="input"
                            type="number"
                            value={events}
                            onChange={(e) => onChange(e, "events")}
                        />
                    </label>
                    <label className="label">
                        Goal
                        <input
                            className="input"
                            type="number"
                            value={goal}
                            onChange={(e) => onChange(e, "goal")}
                        />
                    </label>
                    <label className="label">
                        Completed
                        <input
                            className="input"
                            type="number"
                            value={completed}
                            onChange={(e) => onChange(e, "completed")}
                        />
                    </label>
                    <label className="label">
                        Choose an icon for your goal
                        <select
                            value={icon}
                            className="input"
                            onChange={(e) => onChange(e, "icon")}
                        >
                            {iconOptions.map((icon) => (
                                <option key={icon} value={icon}>
                                    {icon}
                                </option>
                            ))}
                        </select>
                    </label>
                </form>
                <div className={DetailsCss.buttons}>
                    {!id && (
                        <button className="button button--black" onClick={crear}>
                            Create
                        </button>
                    )}
                    {id && (
                        <button className="button button--black" onClick={update}>
                            Update
                        </button>
                    )}
                    {id && (
                        <button className="button button--red" onClick={deleteGoal}>
                            Delete
                        </button>
                    )}
                    <button className="button button--gray" onClick={cancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Details;
