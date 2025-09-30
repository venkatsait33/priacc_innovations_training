
const Card = ({ item }) => {
    return (
        <div className=" rounded-lg p-4 m-4 w-64 h-74 flex flex-col justify-between shadow-xl">
            <img src={item.image} className="w-52 rounded-sm h-32 object-cover object-center " alt={item.name} />
            <h1 className="text-xl font-bold">{item.name}</h1>
            <p>{item.publisher}</p>
            <p>₹{item.price}</p>
            <p className="underline text-blue-400">View recipe</p>
        </div>
    )
}

export default Card 