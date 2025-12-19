import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Monitor", price: 12000 },
];

// Highest price (for slider)
const maxPrice = Math.max(...productsData.map((p) => p.price));
const PRICE_LIMIT = 10000;

const ProductFilter = () => {
  const [search, setSearch] = useState("");
  const [priceType, setPriceType] = useState("all");
  const [rangePrice, setRangePrice] = useState(maxPrice);

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // ⬆⬇ Dropdown price filter
    const matchesDropdown =
      priceType === "all"
        ? true
        : priceType === "above"
        ? product.price > PRICE_LIMIT
        : product.price <= PRICE_LIMIT;

    const matchesRange = product.price <= rangePrice;

    return matchesSearch && matchesDropdown && matchesRange;
  });

  return (
    <div style={{ maxWidth: 480, margin: "auto" }}>
      <h2>🛒 Product Filter</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      {/* Dropdown Price Filter */}
      <select
        value={priceType}
        onChange={(e) => setPriceType(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      >
        <option value="all">All Prices</option>
        <option value="above">Above ₹10,000</option>
        <option value="below">Below ₹10,000</option>
      </select>

      {/* Price Range Slider */}
      <div style={{ marginBottom: 15 }}>
        <label>
          Max Price: <strong>₹{rangePrice}</strong>
        </label>
        <input
          type="range"
          min="0"
          max={maxPrice}
          step="500"
          value={rangePrice}
          onChange={(e) => setRangePrice(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 && <p>No products found</p>}

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: 8 }}>
            <strong>{product.name}</strong> — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
