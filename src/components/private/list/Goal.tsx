import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Goal.module.css";
import type { GoalType } from "../../../types/Goal.ts";

interface GoalProps extends GoalType {}


function Goal({ id, icon, details, period_, events, goal, completed }: GoalProps) {
    return (
        <Link to={`/list/${id}`} className={styles.goal + " card"}>
            {/* GRUPO 1: Icono, Frecuencia, y Detalle */}
            <div className="flex items-center justify-start w-full"> {/* Aseguramos alineación y ancho en móvil */}
                <div className={styles.icon}>{icon}</div>
                <p className={styles.frecuency}>
                    {events}
                    <sub className="text-xs flex ml-2">/{period_}</sub>
                </p>
                <p>{details}</p>
            </div>
            
            {/* GRUPO 2: Progreso y Botón */}
            {/* 🛑 CAMBIO CLAVE: flex-col en móvil, y flex-row en escritorio. Ocupa el ancho completo (w-full). */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-2">
                <div className="relative mx-8 w-full md:w-auto"> {/* Hacemos que la barra ocupe todo el ancho en móvil */}
                    <p className="text-center">
                        {completed} of {goal}
                    </p>
                    <div className={styles.progressBar}>
                        <div
                            style={{
                                width: `${Math.round((completed / goal) * 100)}%`,
                            }}
                            className={styles.progress}
                        ></div>
                    </div>
                </div>
                {/* 🛑 Botón toma el ancho completo en móvil */}
                <button className="button--gray mr-2 w-full md:w-auto mt-2 md:mt-0">Completed</button>
            </div>
        </Link>
    );
}

export default Goal;

