import styles from './Goal.module.css';



function Goal({icono, details, period, events, goal, completed}) {



    return (
        <div className={styles.goal + " tarjeta"}>
            <div className="flex items-center justify-center">
                <div className={styles.icon}>{icono}</div>
                <p className={styles.frecuency}>{events}<sub className='text-xs flex ml-2'>/{period}</sub></p>
                <p>{details}</p>
            </div>
            <div className="flex items-center">
                <div className='relative m-5 mx-8'>
                    <p className='text-center'>{completed} of {goal}</p>
                    <div className={styles.progressBar}>
                        <div 
                        style={{ width: `${Math.round((completed / goal) * 100)}%` }}
                        className={styles.progress}></div>
                    </div>
                </div>
                <button className='button--gray mr-2'>Completed</button>
            </div>
        </div>
    );
}

export default Goal;