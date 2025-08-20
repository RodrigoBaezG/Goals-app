import React, { use, useEffect, useState } from 'react';
import DetailsCss from './Details.module.css';
import { useContext} from 'react';
import { Context } from '../../services/Memory.jsx';
import { useNavigate, useParams } from 'react-router-dom';

function Details() {

    const {id} = useParams();

    const [form, setForm] = useState({
        details: '',
        events: 1,
        period: 'week',
        icon: '📚',
        goal: 1,
        deadline: '',
        completed: 0
    });

    const [state, dispatch] = useContext(Context);

    const { details, events, period, icon, goal, deadline, completed } = form;

    const onChange = (e, prop) => {
        setForm({ ...form, [prop]: e.target.value });
    };

    useEffect(() => {
        const goalMemory = state.objects[id];
        if(!id) return;
        if(!goalMemory){
            return navigate('/404');
        }
        setForm(goalMemory);
        }, [id]);

    const frecuencyOptions = ['day', 'week', 'month', 'year'];
    const iconOptions = ['📚', '💻', '🎨', '🏋️‍♂️', '💦', '✈️'];

    const navigate = useNavigate();

    const crear = async () => {
        dispatch({
            type: 'create_goal',
            goal: form
        });
        navigate('/list');
    };

    const cancel = ()=>{
        navigate('/list');
    }

    const update = ()=>{
        dispatch({type: 'update', goal: form});
        navigate('/list');
    }

    const deleteGoal = ()=>{
        dispatch({type: 'delete', id});
        navigate('/list');
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
                                    key={option}
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
                        (<option key={icon} value={icon}>
                            {icon}
                        </option>
                        ))}
                    </select>

                </label>
            </form>
            <div className={DetailsCss.buttons}>
                {!id && <button
                    className="button button--black"
                    onClick={crear}
                >Create</button>}
                {id && <button
                    className="button button--black"
                    onClick={update}
                >Update</button>}
                {id && <button
                    className="button button--black"
                    onClick={deleteGoal}
                >Delete</button>}
                <button 
                    className="button button--gray"
                    onClick={cancel}
                >Cancel</button>
            </div>
        </div>
    );
};

export default Details;