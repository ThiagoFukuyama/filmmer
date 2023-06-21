import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        saveValue(key, value);
    }, [value]);

    return [value, setValue];
};

const saveValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};
