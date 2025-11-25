import React, { useState } from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import MonthlyChart from "./components/MonthlyChart";

function AppContent() {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    category: "All",
    search: "",
  });
  const [editing, setEditing] = useState(() => {
    const saved = localStorage.getItem("editing_expense");
    return saved ? JSON.parse(saved) : null;
  });
  const updateEditing = (exp) => {
    setEditing(exp);
    if (exp) localStorage.setItem("editing_expense", JSON.stringify(exp));
    else localStorage.removeItem("editing_expense");
  };
  const currentYear = new Date().getFullYear();

  const clearFilters = () =>
    setFilters({ startDate: "", endDate: "", category: "All", search: "" });

  return (
    <>
      <h1 className="text-2xl font-semibold text-center m-2">
        Daily Expense Tracker{" "}
      </h1>
      <div className="grid grid-cols-2 gap-3 container p-4 w-full h-full mx-auto">
        <div>
          <ExpenseForm editing={editing} setEditing={updateEditing} />
          <div style={{ marginTop: 12 }}>
            <Filters
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
            />
            <ExpenseList filters={filters} setEditing={updateEditing} />
          </div>
        </div>

        <aside>
          <MonthlyChart year={currentYear} />
          <div style={{ marginTop: 12 }}>
            <h4>Quick Add</h4>
            {/* You can add a compact quick-add form here if desired */}
            <p style={{ color: "#666" }}>
              Tip: Use the Add Expense box to track quickly.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

function App() {
  return (
    <ExpenseProvider>
      <AppContent />
    </ExpenseProvider>
  );
}

export default App;
