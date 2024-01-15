import { useState } from "react";

export const useToggle=(defaultvalue)=>{
    const[show, setShow]=useState(defaultvalue)
    
    const toggle=()=>{
        setShow(!show)
        console.log('done')
    }
    return{show,toggle}
}