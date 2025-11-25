import React, { useEffect, useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

const defaultForm = {
  date: new Date().toISOString().slice(0, 10),
  amount: "",
  category: "Other",
  note: "",
};

const categories = [
  "Food",
  "Transport",
  "Bills",
  "Shopping",
  "Entertainment",
  "Other",
];

const ExpenseForm = ({ editing, setEditing }) => {
  const { addExpense, updateExpense } = useExpenses();
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (editing) {
      // editing is an expense object
      setForm({
        date: editing.date.slice(0, 10),
        amount: editing.amount,
        category: editing.category,
        note: editing.note || "",
      });
    } else {
      setForm(defaultForm);
    }
  }, [editing]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || isNaN(Number(form.amount))) {
      alert("Please enter a valid amount");
      return;
    }

    const payload = {
      date: new Date(form.date).toISOString(),
      amount: Number(form.amount),
      category: form.category,
      note: form.note,
    };

    if (editing) {
      updateExpense(editing.id, payload);
      setEditing(null);
    } else {
      addExpense(payload);
    }

    setForm(defaultForm);
  };

  const handleCancel = () => {
    setEditing && setEditing(null);
    setForm(defaultForm);
  };

  return (
    <div className="border-2 p-4 rounded-xl h-60 w-full">
      <h3 className="text-xl font-semibold text-center">
        {editing ? "Edit Expense" : "Add Expense"}
      </h3>{" "}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 h-full justify-start items-center "
      >
        <label className="label">
          Date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Amount
          <input
            type="number"
            name="amount"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
            required
            className="input"
          />
        </label>

        <label className="label">
          Category
          <select
            className="select"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="label">
          Note
          <input
            className="input"
            type="text"
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="optional"
          />
        </label>

        <div>
          <button className="btn btn-primary  btn-lg" type="submit">
            {editing ? "Update" : "Add"}
          </button>
          {editing && (
            <button
              className="btn btn-error btn-lg"
              type="button"
              onClick={handleCancel}
              style={{ marginLeft: 8 }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
