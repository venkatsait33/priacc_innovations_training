import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../axios/axiosConfig";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await api.get("/contacts");
    setContacts(res.data);
  };

  const markResolved = async (id, data) => {
    await api.patch(`/contacts/${id}`, { resolved: !data.resolved });
    toast.success("Status updated!");
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    toast.success("Deleted!");
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-4 m-2">
      <h2 className=" font-semibold text-2xl  m-2">Admin Dashboard</h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table
          className="table-auto table-zebra table"
          border="1"
          width="100%"
          cellPadding="10"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.issueType}</td>
                <td>{contact.message}</td>

                <td style={{ color: contact.resolved ? "green" : "red" }}>
                  {contact.resolved ? "Resolved" : "Pending"}
                </td>

                <td className="flex flex-wrap gap-3">
                  <button
                    className="btn btn-accent"
                    onClick={() => markResolved(contact.id, contact)}
                  >
                    {contact.resolved ? "Undo" : "Resolve"}
                  </button>

                  <button
                    className=" btn btn-error"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
