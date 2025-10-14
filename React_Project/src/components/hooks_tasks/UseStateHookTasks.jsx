import { useState } from 'react'

const UseStateHookTasks = () => {

    const [count, setCount] = useState(0)

    const [display, setDisplay] = useState(true)

    const [inputValue, setInputValue] = useState('')

    const [clicked, setClicked] = useState({
        button1: 0,
        button2: 0,
        button3: 0
    })

    const [isBlue, setIsBlue] = useState(false);

    const toggleBackground = () => {
        setIsBlue((prev) => !prev);
    };


    return (
        <div className=' flex flex-col justify-center items-center mx-auto p-4 gap-4'>
            <h1 className=' text-center font-semibold'>Tasks using useStateHooks</h1>
            <div className=' flex flex-col justify-between gap-4 shadow-xl p-4 rounded-2xl w-90 mx-auto'>
                <h1 className='text-center font-semibold'>Counter App</h1>
                <div>
                    <h1 className=''>Counts: {count} </h1>
                    <div className='flex justify-between gap-4 items-center mt-3'>
                        <button className=' bg-green-400 p-2 rounded-md shadow-md font-medium' onClick={() => setCount(count + 1)}>Increase</button>
                        <button className=' bg-red-400 p-2 rounded-md shadow-md font-medium' onClick={() => setCount(count - 1)}>Decrease</button>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col justify-between gap-4 shadow-xl p-4 rounded-2xl w-90 mx-auto'>
                <h1 className=' font-medium'>Toggle to display the text</h1>
                {
                    display && <h1>Hello World</h1>
                }
                <div className='flex justify-between gap-4 items-center'>

                    <button className=' bg-purple-200 p-2 rounded-md shadow-md font-semibold' onClick={() => setDisplay(!display)}>Toggle</button>

                </div>
            </div>

            <div className=' flex flex-col justify-between gap-4 shadow-xl p-4 rounded-2xl w-90 mx-auto'>
                <h1 className='text-center font-semibold'>Display input value in results</h1>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} className=' border py-2 px-2 rounded-2xl ' placeholder='Enter here' />

                {
                    inputValue && <div className=' p-2 rounded-md shadow-xl bg-slate-400 text-white'>
                        <h1 className='text-xl'>Result</h1>
                        <p>{inputValue}</p>
                    </div>
                }

            </div>

            <div className=' flex flex-col  gap-3 border p-4  rounded-3xl w-90 mt-4'>
                <h1 className='text-center font-semibold'>Cont the buttons clicked separately</h1>

                <div className='flex justify-between items-center gap-4'>
                    <h1 className=''>Button 1: {clicked.button1}</h1>
                    <h1>Button 2: {clicked.button2}</h1>
                    <h1>Button 3: {clicked.button3}</h1>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <button
                        className=' bg-slate-400 p-2 rounded-md text-white'
                        onClick={() =>
                            setClicked((prev) => ({ ...prev, button1: prev.button1 + 1 }))
                        }
                    >
                        Button 1
                    </button>

                    <button
                        className=' bg-slate-600 p-2 rounded-md text-white'
                        onClick={() =>
                            setClicked((prev) => ({ ...prev, button2: prev.button2 + 1 }))
                        }
                    >
                        Button 2
                    </button>

                    <button
                        className=' bg-slate-800 p-2 rounded-md text-white'
                        onClick={() =>
                            setClicked((prev) => ({ ...prev, button3: prev.button3 + 1 }))
                        }
                    >
                        Button 3
                    </button>
                </div>
            </div>

            <div>
                <h1 className='text-center font-semibold'>Change the background color</h1>
                <div
                    style={{
                        height: "20vh",
                        width: "100%",
                        backgroundColor: isBlue ? "blue" : "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "background-color 0.3s ease",
                    }}
                >
                    <button
                        onClick={toggleBackground}
                        style={{
                            padding: "10px 20px",
                            fontSize: "18px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor: isBlue ? "white" : "blue",
                            color: isBlue ? "blue" : "white",
                            border: "none",
                        }}
                    >
                        Change Background
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseStateHookTasks