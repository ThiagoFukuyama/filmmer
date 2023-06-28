import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    if (isFirstRender.current) {
        isFirstRender.current = false;
        return value;
    }

    return debouncedValue;
};
