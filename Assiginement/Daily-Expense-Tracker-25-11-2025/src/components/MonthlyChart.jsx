import React, { useMemo } from "react";
import { useExpenses } from "../context/ExpenseContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const MonthlyChart = ({ year }) => {
  const { expenses } = useExpenses();

  const data = useMemo(() => {
    // build months 0..11
    const months = Array.from({ length: 12 }, (_, i) => ({
      month: i,
      label: new Date(year, i, 1).toLocaleString(undefined, { month: "short" }),
      total: 0,
    }));
    expenses.forEach((e) => {
      const d = new Date(e.date);
      if (d.getFullYear() === year) {
        months[d.getMonth()].total += Number(e.amount) || 0;
      }
    });
    return months.map((m) => ({ ...m, total: Number(m.total.toFixed(2)) }));
  }, [expenses, year]);

  return (
    <div className=" h-[500px] border-2 rounded-xl p-4 ">
      <h4 className="text-lg font-semibold">Monthly Expense - {year}</h4>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Bar dataKey="total" name="Total" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
