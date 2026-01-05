import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateTicketStatus,
  updateInternalNotes,
} from "../redux/slice/userTicketSlice";
import { useState } from "react";

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tickets } = useSelector((state) => state.userTicket);

  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  if (!user) {
    navigate("/login");
    return null;
  }

  // 🔍 Filter Logic
  const filteredTickets = tickets.filter((ticket) => {
    return (
      (statusFilter ? ticket.status === statusFilter : true) &&
      (priorityFilter ? ticket.issuePriority === priorityFilter : true)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Ticket Dashboard</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="select select-bordered"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select
          className="select select-bordered"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-box border bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Internal Notes</th>
            </tr>
          </thead>

          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.issueType}</td>
                <td>{ticket.issuePriority}</td>

                {/* Status Update */}
                <td>
                  <select
                    className="select select-sm"
                    value={ticket.status}
                    onChange={(e) =>
                      dispatch(
                        updateTicketStatus({
                          id: ticket.id,
                          status: e.target.value,
                        })
                      )
                    }
                  >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </td>

                {/* Internal Notes */}
                <td>
                  <textarea
                    className="textarea textarea-sm w-full"
                    placeholder="Add notes..."
                    value={ticket.internalNotes}
                    onChange={(e) =>
                      dispatch(
                        updateInternalNotes({
                          id: ticket.id,
                          notes: e.target.value,
                        })
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTickets.length === 0 && (
          <p className="text-center p-4 text-gray-500">No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
