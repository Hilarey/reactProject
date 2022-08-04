import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleTooggleBookMark = (id) => {
    setUsers(
      users.map((c) =>
        c._id === id && c.bookmark === false
          ? { ...c, bookmark: true }
          : c._id === id && c.bookmark === true
          ? { ...c, bookmark: false }
          : c
      )
    );
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onTooggleBookMark={handleTooggleBookMark}
      />
    </div>
  );
}

export default App;
