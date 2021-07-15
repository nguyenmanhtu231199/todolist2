import React from 'react'
import './style.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { savetodo } from '../features/TodoSlice';
const Input = () => {
    const [input, setInput]= useState('');
     const dispatch = useDispatch()
    const handleInput = ()=>{
        dispatch(savetodo({
            item :input,
            done: false,
            id: Date.now(),

        }))
    };
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={handleInput} > ADD</button>
        </div>
    )
}

export default Input
