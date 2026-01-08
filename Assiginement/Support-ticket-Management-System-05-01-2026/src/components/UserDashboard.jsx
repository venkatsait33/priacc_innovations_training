import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { tickets } = useSelector((state) => state.userTicket);

  if (!user) {
    navigate("/login");
    return;
  }

  const userTickets = tickets.filter((ticket) => ticket.userId === user.id);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome {user.name}</h1>
        <Link className="btn btn-secondary" to="/user/create">
          Create a Ticket
        </Link>
      </div>
      <h1 className="text-2xl font-semibold mb-4">My Tickets</h1>

      {userTickets.length === 0 ? (
        <p>No tickets raised yet</p>
      ) : (
        <div className="grid gap-4">
          {userTickets.map((ticket) => (
            <div key={ticket.id} className="border p-4 rounded-lg shadow">
              <p>
                <b>Issue:</b> {ticket.issueType}
              </p>
              <p>
                <b>Priority:</b> {ticket.issuePriority}
              </p>
              <p>
                <b>Status:</b> {ticket.status}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(ticket.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
