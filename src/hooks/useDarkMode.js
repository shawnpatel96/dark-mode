import useLocalStorage from "./useLocalStorage"
import { useEffect } from 'react';

 const useDarkMode = (key, initialValue)=>{
    
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    const toggleDarkMode = event =>{
        event.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    useEffect(()=>{
        if(darkMode===true){
            document.body.classList.add('dark-mode')

        }else{
            document.body.classList.remove('dark-mode')

        }

    }, [darkMode])

    return [darkMode, toggleDarkMode]
}

export default useDarkMode

