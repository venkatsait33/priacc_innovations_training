import { useState } from "react"

const ContactForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        setData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }
    return (
        <div className="  h-screen bg-gray-200 flex justify-center items-center mx-auto">
            <form action="submit
          " onSubmit={handleSubmit} className="flex  justify-center rounded-xl w-96 h-76 items-center border gap-8 p-4 flex-col mx-auto ">
                <input type="text" placeholder="Name" name="name" className=" border rounded-sm w-full" onChange={handleChange}></input>
                <input type="text" placeholder="Email" name="email"
                    className=" border rounded-sm w-full"
                    onChange={handleChange}></input>
                <input type="number" placeholder="Phone" name="phone"
                    className=" border rounded-sm w-full"    onChange={handleChange}></input>
                <input type="text" placeholder="Message" name="message"
                    className=" border rounded-sm w-full"    onChange={handleChange}></input>
                <button type="submit" className=" bg-blue-500 p-2 border rounded-xl text-white hover:bg-blue-700">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm