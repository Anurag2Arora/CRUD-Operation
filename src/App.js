import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List/List";
import AddBooks from "./AddBooks/AddBooks";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    await axios.get(url).then((response) => setState(response));
  };

  return (
    <div>
      <AddBooks />
      <div className="app_body">
        <List state={state} />
      </div>
    </div>
  );
}

export default App;
