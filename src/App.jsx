import React, { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BookList";

const App = () => {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    setBookId(id);
  };
  return (
    <div className="container">
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList getBookId={getBookIdHandler} />
    </div>
  );
};

export default App;
