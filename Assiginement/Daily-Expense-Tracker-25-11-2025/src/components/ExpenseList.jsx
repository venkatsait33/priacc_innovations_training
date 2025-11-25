import React, { useMemo, useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseList = ({ filters, setEditing }) => {
  const { expenses, deleteExpense } = useExpenses();
  const [sortBy, setSortBy] = useState("newest");

  const filtered = useMemo(() => {
    return expenses
      .filter((e) => {
        // date filter: between start and end if provided
        const eDate = new Date(e.date);
        if (filters.startDate) {
          const s = new Date(filters.startDate);
          if (eDate < s) return false;
        }
        if (filters.endDate) {
          const en = new Date(filters.endDate);
          if (
            eDate >
            new Date(en.getFullYear(), en.getMonth(), en.getDate(), 23, 59, 59)
          )
            return false;
        }
        if (filters.category && filters.category !== "All") {
          if (e.category !== filters.category) return false;
        }
        if (filters.search) {
          const q = filters.search.toLowerCase();
          if (
            !(
              e.note?.toLowerCase().includes(q) ||
              e.category.toLowerCase().includes(q)
            )
          )
            return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
        if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
        if (sortBy === "amount_desc") return b.amount - a.amount;
        if (sortBy === "amount_asc") return a.amount - b.amount;
        return 0;
      });
  }, [expenses, filters, sortBy]);

  const total = filtered.reduce((s, i) => s + (i.amount || 0), 0);

  return (
    <div className="mt-6 flex flex-col gap-4 shadow-xl">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 className="text-2xl font-semibold">Expenses ({filtered.length})</h3>
        <div>
          <strong>Total: </strong> ₹{total.toFixed(2)}
        </div>
      </div>

      <div>
        <label className="label">Sort: &nbsp; </label>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="amount_desc">Amount (High→Low)</option>
          <option value="amount_asc">Amount (Low→High)</option>
        </select>
      </div>

      <table className="table ">
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #fafafa" }}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.category}</td>
              <td>{item.note}</td>
              <td>₹{item.amount.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditing(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    if (window.confirm("Delete this expense?"))
                      deleteExpense(item.id);
                  }}
                  style={{ marginLeft: 8 }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: 12 }}>
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
