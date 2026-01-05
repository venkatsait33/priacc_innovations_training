import { createSlice, nanoid } from "@reduxjs/toolkit";

const userTicketSlice = createSlice({
  name: "userTicket",
  initialState: {
    tickets: [],
  },
  reducers: {
    addTicket: {
      reducer: (state, action) => {
        state.tickets.push(action.payload);
      },
      prepare: ({ ticketData, userId }) => ({
        payload: {
          id: nanoid(),
          userId,
          ...ticketData,
          status: "Open",
          internalNotes: "",
          createdAt: new Date().toISOString(),
        },
      }),
    },

    updateTicketStatus: (state, action) => {
      const { id, status } = action.payload;
      const ticket = state.tickets.find((t) => t.id === id);
      if (ticket) ticket.status = status;
    },

    updateInternalNotes: (state, action) => {
      const { id, notes } = action.payload;
      const ticket = state.tickets.find((t) => t.id === id);
      if (ticket) ticket.internalNotes = notes;
    },
  },
});

export const { addTicket, updateTicketStatus, updateInternalNotes } =
  userTicketSlice.actions;

export default userTicketSlice.reducer;
