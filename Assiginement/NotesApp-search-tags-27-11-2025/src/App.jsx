import { useState } from "react";
import { NotesProvider } from "./context/NotesContext";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className=" w-full h-full container mx-auto flex justify-center p-4">
      <NotesProvider>
        <div className=" flex flex-col gap-2 w-1/2">
          <h2 className=" text-3xl font-semibold">Notes App</h2>
          <SearchBar search={search} setSearch={setSearch} />
          <div className=" divider" />
          <NoteForm />
          <div className=" divider" />
          <NotesList search={search} />
        </div>
      </NotesProvider>
    </div>
  );
};

export default App;
