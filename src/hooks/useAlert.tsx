import { useState } from 'react';

// Definimos la interfaz para las opciones del alert
interface AlertOptions {
    active: boolean;
    message: string;
    type: string;
    autoClose: boolean;
}

// Definimos la interfaz para el estado del alert
export interface AlertState extends AlertOptions { }

const useAlert = (options: AlertOptions) => {
    const defaultOptions: AlertOptions = {
        active: false,
        message: '',
        type: '',
        autoClose: true,
    };

    // Utilizamos el hook useState para manejar el estado del alert
    const [alert, setAlert] = useState<AlertState>({
        ...defaultOptions,
        ...options,
    });

    // Función para cambiar el estado del alert
    const toggleAlert = () => {
        setAlert({ ...alert, active: !alert.active });
    };

    // Retornamos el estado y las funciones necesarias
    return {
        alert,
        setAlert,
        toggleAlert,
    };
};

export default useAlert;