import React, { useState } from 'react';
import DetailsCss from './Details.module.css';

function Details() {

    const [form, setForm] = useState({
        details: 'Aprender React',
        events: 1,
        period: 'week',
        icon: '📚',
        goal: 1,
        deadline: '2023-12-31',
        completed: 0
    });

    const { details, events, period, icon, goal, deadline, completed } = form;

    const frecuencyOptions = ['day', 'week', 'month', 'year'];
    const iconOptions = ['📚', '💻', '🎨', '🏋️‍♂️', '💦', '✈️'];

    const onChange = (e, prop) => {
        setForm({...form, [prop]: e.target.value});
    };

    const crear = async ()=> {
        console.log(form);
    }

    return (
        <div className="tarjeta">
            <form action="" className="p-4">
                <label className="label">
                    Describe your goal
                    <input
                        value={details}
                        type="text"
                        className="input"
                        onChange={(e) => onChange(e, 'details')}
                    />
                </label>
                <label className="label">
                    How often do you want to achieve this goal?
                    <div className="flex">
                        <input
                            value={events}
                            type="text"
                            className="input mr-6"
                            onChange={(e) => onChange(e, 'events')}
                        />
                        <select 
                            value={period} 
                            className="input"
                            onChange={(e) => onChange(e, 'period')}
                        >
                            {frecuencyOptions.map(option => (
                                <option 
                                value={option}
                                onChange={(e) => onChange(e, 'option')}
                                >{option}</option>
                            ))}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input
                        value={deadline}
                        type="date"
                        className="input"
                        onChange={(e) => onChange(e, 'deadline')}
                    />
                </label>
                <label className="label">
                    How many times have you achieved this goal?
                    <input
                        className="input"
                        value={completed}
                        type="number"
                        min={0}
                        onChange={(e) => onChange(e, 'completed')}
                    />
                </label>
                <label className="label">
                    How many times do you want to achieve this goal?
                    <input
                        value={goal}
                        type="number"
                        min={0}
                        className="input"
                        onChange={(e) => onChange(e, 'goal')}
                    />
                </label>
                <label className="label">
                    Choose an icon for your goal
                    <select value={icon}
                        className="input"
                        onChange={(e) => onChange(e, 'icon')}
                    >
                        {iconOptions.map(icon =>
                        (<option value={icon}>
                        {icon}
                        </option>
                        ))}
                    </select>

                </label>
            </form>
            <div className={DetailsCss.buttons}>
                <button 
                    className="button button--black"
                    onClick={crear}
                    >Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
    );
}

export default Details;