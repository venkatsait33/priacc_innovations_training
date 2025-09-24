import React, { useEffect, useState } from 'react'

const TodoApp = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(saved);
    }, []);

    const handleAdd = () => {
        const text = input.trim();
        if (!text) return;

        const updated = [...todos, text];
        setTodos(updated);
        localStorage.setItem('todos', JSON.stringify(updated));
        setInput(''); // clear the input
    };

    const handleDelete = (index) => {
        const updated = todos.filter((_, i) => i !== index);
        setTodos(updated);
        localStorage.setItem('todos', JSON.stringify(updated));
    }

    return (
        <div className='container p-2 m-2'>
            <div className='flex flex-col gap-4'>
                <h1>
                    TODO
                </h1>

                <div className='flex gap-2'>
                    <input type="text" value={input} onChange={
                        (e) => setInput(e.target.value)
                    } className='input border rounded-sm p-2' />
                    <button className='p-2 border rounded-sm bg-amber-300' onClick={handleAdd}>ADD</button>
                </div>

                <ul className='flex flex-col gap-2 items-center justify-between'>
                    {todos.map((item, i) => (
                        <div className='flex gap-2 items-center'>
                            <li key={i}>{item}</li>
                            <button className='p-2 border rounded-sm bg-red-300' onClick={() => handleDelete(i)}>Delete</button>
                        </div>

                    ))}
                </ul>
            </div>
        </div>

    )
}

export default TodoApp