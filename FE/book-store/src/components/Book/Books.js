import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";

const URL = "http://localhost:4000/books";

const featch = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    featch().then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
