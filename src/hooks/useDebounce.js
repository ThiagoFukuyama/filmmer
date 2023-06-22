export const useDebounce = (cb, delay = 500) => {
    let timeout;
    function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }

    executedFunction.cancel = () => clearTimeout(timeout);

    return executedFunction;
};
