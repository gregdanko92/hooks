// https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM

import React, { useState, useEffect } from 'react'
import {useForm} from './useForm'
import {useFetch} from './useFetch'

const Timer = () =>{
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''})

    useEffect(()=>{
        const onMouseMove = e =>{
            console.log(e)
            
        }
        window.addEventListener('mousemove', onMouseMove)
        //dependency array is below this. the use effect will fire when the dependency 

        return ()=>{
            window.removeEventListener('mousemove', onMouseMove)
            console.log('removed')
        }
    }, [])

    const [count, setCount] = useState(0)

     const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

     useEffect(()=>{
         localStorage.setItem('count', JSON.stringify(count))
     }, [count])

    return (
        <div>
            <div>{!data? 'loading...' : data}</div>
            <div> count : {count}</div>
            <button onClick={()=>setCount(c=> c+1)}>increment</button>

            <input type="email" name="email" value={values.email} onChange={handleChange}/>
            <input type="" name="" value={values.firstName} onChange={handleChange}/>
            <input type="password" name="password" value={values.password} onChange={handleChange}/>
        </div>
    )
}

export default Timer