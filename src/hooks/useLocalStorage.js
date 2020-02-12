import { useState } from 'react';

 const useLocalstorage = (key, initialValue) => {

    const[storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);   // Check to see if it already exists
        return item ? JSON.parse(item) : initialValue; // Parse and return stored JSON or return initialValue if undefined
    });

    const setValue = value =>{
        setStoredValue(value);  // saves state
        window.localStorage.setItem(key, JSON.stringify(value)); // save to local storage
    }

    return [storedValue, setValue];

}

export default useLocalstorage


