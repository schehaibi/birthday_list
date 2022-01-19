import React,{useState} from 'react'

export const useForm=(initialValues)=> {
    const [value,setvalue]=useState(initialValues);
    return[
        [value,e=>{
            setvalue({...value,[e.target.name]:e.target.value})
        }]
    ]
}
