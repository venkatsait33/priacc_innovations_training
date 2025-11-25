import React, { createContext, useContext, useEffect, useState } from "react";

const ExpenseContext = createContext();
const LOCAL_KEY = "daily_expenses_v1";

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [initialized, setInitialized] = useState(false); // ⬅ IMPORTANT

  // Load from localStorage ONCE
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        setExpenses(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse localStorage", err);
      }
    }
    setInitialized(true); // ⬅ mark as loaded
  }, []);

  // Save ONLY after initial load is finished
  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(expenses));
    }
  }, [expenses, initialized]);

  // CRUD
  const addExpense = (expense) => {
    setExpenses((prev) => [{ ...expense, id: Date.now() }, ...prev]);
  };

  const updateExpense = (id, updates) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const clearAll = () => setExpenses([]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
        clearAll,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
