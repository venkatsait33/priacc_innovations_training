import React, { useState } from "react";

const VendingMachine = () => {
    const denominations = [1, 2, 5, 10, 20, 50, 100,500];

    const [products, setProducts] = useState([
        { id: 1, name: "Coke", price: 40, stock: 5 },
        { id: 2, name: "Pepsi", price: 35, stock: 5 },
        { id: 3, name: "Sprite", price: 30, stock: 5 },
    ]);

    const [cart, setCart] = useState([]); // ✅ Multiple selected products
    const [enteredAmount, setEnteredAmount] = useState(0);

    // ✅ Add / Restock product
    const addOrRestockProduct = (newProduct) => {
        setProducts((prev) => {
            const existing = prev.find((p) => p.id === newProduct.id);
            if (existing) {
                return prev.map((p) =>
                    p.id === newProduct.id ? { ...p, stock: p.stock + newProduct.stock } : p
                );
            } else {
                return [...prev, newProduct];
            }
        });
    };

    // ✅ Select product (can select multiple)
    const handleSelectProduct = (id) => {
        const product = products.find((p) => p.id === id);
        if (!product || product.stock === 0) {
            alert("Product unavailable!");
            return;
        }
        setCart((prev) => [...prev, product]);
        alert(`Added ${product.name} to cart`);
    };

    // ✅ Enter currency
    const handleEnterCurrency = (amount) => {
        if (!denominations.includes(amount)) {
            alert("Invalid denomination!");
            return;
        }
        if (cart.length === 0) {
            alert("Select at least one product!");
            return;
        }

        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        const newAmount = enteredAmount + amount;
        setEnteredAmount(newAmount);

        if (newAmount < totalPrice) {
            alert(
                `Inserted ₹${newAmount}. Please insert ₹${totalPrice - newAmount} more.`
            );
        } else if (newAmount === totalPrice) {
            dispenseProducts(0);
        } else {
            const change = newAmount - totalPrice;
            dispenseProducts(change);
        }
    };

    // ✅ Dispense products (with optional change)
    const dispenseProducts = (change = 0) => {
        setProducts((prev) =>
            prev.map((p) => {
                const count = cart.filter((c) => c.id === p.id).length;
                if (count > 0) {
                    return { ...p, stock: p.stock - count };
                }
                return p;
            })
        );

        if (change > 0) {
            alert(
                `Dispensed: ${cart.map((c) => c.name).join(", ")}. Please collect your ₹${change} change.`
            );
        } else {
            alert(`Dispensed: ${cart.map((c) => c.name).join(", ")}. Enjoy your drinks!`);
        }

        setCart([]);
        setEnteredAmount(0);
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">🥤 Vending Machine</h1>

            {/* Products */}
            <h2 className="text-xl font-semibold mb-2">Available Products</h2>
            <ul className="mb-4">
                {products.map((p) => (
                    <li
                        key={p.id}
                        className="flex justify-between items-center bg-white p-2 rounded shadow mb-2"
                    >
                        <span>
                            {p.name} - ₹{p.price} ({p.stock} left)
                        </span>
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={() => handleSelectProduct(p.id)}
                            disabled={p.stock === 0}
                        >
                            Add
                        </button>
                    </li>
                ))}
            </ul>

            {/* Cart */}
            {cart.length > 0 && (
                <div className="mb-4 p-3 bg-white rounded shadow">
                    <h2 className="font-semibold">🛒 Cart</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 font-bold">
                        Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
                    </p>
                </div>
            )}

            {/* Currency Buttons */}
            <h2 className="text-xl font-semibold mb-2">Insert Money</h2>
            <div className="flex flex-wrap gap-2 mb-4">
                {denominations.map((d) => (
                    <button
                        key={d}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => handleEnterCurrency(d)}
                    >
                        ₹{d}
                    </button>
                ))}
            </div>

            {/* Add Product (Example) */}
            <button
                className="bg-purple-500 text-white px-3 py-1 rounded"
                onClick={() =>
                    addOrRestockProduct({ id: 4, name: "ThumbsUp", price: 45, stock: 5 })
                }
            >
                ➕ Add ThumbsUp
            </button>
        </div>
    );
};

export default VendingMachine;
