import DetailsCss from './Details.module.css';

function Details() {

    const frecuencyOptions = ['day', 'week', 'month', 'year'];
    const iconOptions = ['📚', '💻', '🎨', '🏋️‍♂️', '💦', '✈️'];
    return (
        <div className="tarjeta">
            <form action="" className="p-4">
                <label className="label">
                    Describe your goal
                    <input type="text" className="input" placeholder="e.g., Learn React" />
                </label>
                <label className="label">
                    How often do you want to achieve this goal?
                    <div className="flex">
                        <input type="text" className="input mr-6" />
                        <select name="" id="" className="input">
                            {frecuencyOptions.map(option => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input type="date" className="input" />
                </label>
                <label className="label">
                    How many times do you want to achieve this goal?
                    <input type="number" min={0} className="input"/>
                </label>
                <label className="label">
                    Choose an icon for your goal
                    <select>
                        {iconOptions.map(icon => ( <option value={icon}>{icon}</option>
                        ))}
                    </select>

                </label>
            </form>
            <div className={DetailsCss.buttons}>
                <button className="button button--black">Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
    );
}

export default Details;